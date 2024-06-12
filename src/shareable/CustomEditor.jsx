import React, { useEffect, useRef, useState } from "react";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import { CompositeDecorator, Editor, EditorState, RichUtils } from "draft-js";
import "../../node_modules/draft-js/dist/Draft.css";
import {
  BsBlockquoteLeft,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
} from "react-icons/bs";
import { MdFormatListBulleted, MdFormatListNumbered } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CustomEditor = ({ refer = "CreatePost" }) => {
  const editor = useRef();
  const urlRef = useRef();
  const [urlValue, setURLValue] = useState("");
  const [showURLInput, setShowURLInput] = useState(false);
  useEffect(() => {
    editor.current.focus();
  }, []);

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(decorator)
  );

  // overrides the styles for "block control"
  function getBlockStyle(block) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  }

  //icon binding
  function _onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }
  function _onItalicClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  }
  function _onUnderlineClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  }
  function _onOrderListClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  }
  function _onUnorderListClick() {
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
  }
  function _onHeaderOneClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
  }
  function _onHeaderTwoClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-three"));
  }
  function _onCodeClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "code-block"));
  }
  function _onBlockQuoteClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "blockquote"));
  }
  function _onLinkClick() {}

  //key binding
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  }

  //on click on link icon
  function _onLinkClick() {
    //get the selection area
    const selection = editorState.getSelection();
    //if selection is not collapsed
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent(); //get current content select area
      const startKey = editorState.getSelection().getStartKey(); //get start key
      const startOffset = editorState.getSelection().getStartOffset(); //get offset
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

      let url = "";
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      setShowURLInput(true);
      setURLValue(url);
    }
  }

  //on click add link button
  function confirmLink(e) {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    setEditorState(
      RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    );
    setShowURLInput(false);
    setURLValue("");
  }

  //on click remove button
  function removeLink(e) {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
      setShowURLInput(false);
    }
  }

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex flex-row gap-0 md:gap-1">
        <button
          onClick={_onBoldClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <BsTypeBold />
        </button>
        <button
          onClick={_onItalicClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <BsTypeItalic />
        </button>
        <button
          onClick={_onUnderlineClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <BsTypeUnderline />
        </button>

        <button
          onClick={_onHeaderOneClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <LuHeading1 />
        </button>
        <button
          onClick={_onHeaderTwoClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <LuHeading2 />
        </button>
        <button
          onClick={_onOrderListClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <MdFormatListNumbered />
        </button>
        <button
          onClick={_onUnorderListClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <MdFormatListBulleted />
        </button>
        <button
          onClick={_onBlockQuoteClick}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <BsBlockquoteLeft />
        </button>
        <button
          onClick={_onCodeClick}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <FaCode />
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={_onLinkClick}
              className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
            >
              <IoLink />
            </button>
          </DialogTrigger>
          {showURLInput && (
            <DialogContent className="p-5 w-[340px]">
              <div className="text-lg font-semibold">Add or Remove Link</div>
              <input
                id="link"
                placeholder="Enter the link"
                className="text-xs border-[1px] outline-none p-2"
                ref={urlRef}
                value={urlValue}
                onChange={(e) => setURLValue(e.target.value)}
              />
              <div className="flex justify-between mt-3">
                <Button onClick={confirmLink}>Add Link</Button>
                {urlValue && (
                  <Button onClick={removeLink} variant="outline">
                    Remove
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
      <div
        onClick={() => editor.current.focus()}
        style={
          refer === "JobComment"
            ? { minHeight: "50px" }
            : refer === "Coding"
            ? { minHeight: "360px" }
            : { minHeight: "230px" }
        }
      >
        <Editor
          blockStyleFn={getBlockStyle} //define the custom css for block control
          editorState={editorState}
          onChange={(editorState) => setEditorState(editorState)}
          handleKeyCommand={handleKeyCommand}
          ref={editor}
          placeholder={
            refer === "JobComment"
              ? "Add a comment, ask a question or share your experience & reviews..."
              : refer === "Coding"
              ? "Write notes here..."
              : "Describe what's on your mind..."
          }
        />
      </div>
    </div>
  );
};

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} className="text-[#4266b2] underline">
      {props.children}
    </a>
  );
};

export default CustomEditor;
