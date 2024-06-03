import React, { useEffect, useRef, useState } from "react";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { Editor, EditorState, RichUtils } from "draft-js";
import "../../node_modules/draft-js/dist/Draft.css";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";
import { MdFormatListBulleted, MdFormatListNumbered } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const CustomEditor = () => {
  const editor = useRef();

  useEffect(() => {
    editor.current.focus();
  }, []);

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  //   State
  const [selectBtn, setSelectBtn] = useState([]);
  const [selectList, setSelectList] = useState(null);
  const [selectHeading, setSelectHeading] = useState(null);

  //icon binding
  function _onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    if (selectBtn.some((curr) => curr === "Bold")) {
      setSelectBtn(selectBtn.filter((curr) => curr != "Bold"));
    } else {
      setSelectBtn([...selectBtn, "Bold"]);
    }
  }
  function _onItalicClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    if (selectBtn.some((curr) => curr === "Italic")) {
      setSelectBtn(selectBtn.filter((curr) => curr != "Italic"));
    } else {
      setSelectBtn([...selectBtn, "Italic"]);
    }
  }
  function _onUnderlineClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    if (selectBtn.some((curr) => curr === "Underline")) {
      setSelectBtn(selectBtn.filter((curr) => curr != "Underline"));
    } else {
      setSelectBtn([...selectBtn, "Underline"]);
    }
  }
  function _onOrderListClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
    if (selectList === "Ordered") {
      setSelectList(null);
    } else {
      setSelectList("Ordered");
    }
  }
  function _onUnorderListClick() {
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
    if (selectList === "Unordered") {
      setSelectList(null);
    } else {
      setSelectList("Unordered");
    }
  }
  function _onHeaderOneClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
    if (selectHeading == "one") {
      setSelectHeading(null);
    } else {
      setSelectHeading("one");
    }
  }
  function _onHeaderTwoClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
    if (selectHeading == "two") {
      setSelectHeading(null);
    } else {
      setSelectHeading("two");
    }
  }
  function _onHeaderThreeClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-three"));
    if (selectHeading == "three") {
      setSelectHeading(null);
    } else {
      setSelectHeading("three");
    }
  }
  function _onHeaderFourClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-four"));
    if (selectHeading == "four") {
      setSelectHeading(null);
    } else {
      setSelectHeading("four");
    }
  }
  function _onHeaderFiveClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-five"));
    if (selectHeading == "five") {
      setSelectHeading(null);
    } else {
      setSelectHeading("five");
    }
  }
  function _onHeaderSixClick() {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-six"));
    if (selectHeading == "six") {
      setSelectHeading(null);
    } else {
      setSelectHeading("six");
    }
  }
  function _onCodeClick() {
    // setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"));
    setEditorState(RichUtils.toggleCode(editorState));
  }

  //key binding
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  }

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex flex-row gap-1">
        <button
          onClick={_onBoldClick.bind()}
          className={` ${
            selectBtn.some((curr) => curr === "Bold") ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <BsTypeBold />
        </button>
        <button
          onClick={_onItalicClick.bind()}
          className={` ${
            selectBtn.some((curr) => curr === "Italic") ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <BsTypeItalic />
        </button>
        <button
          onClick={_onUnderlineClick.bind()}
          className={` ${
            selectBtn.some((curr) => curr === "Underline") ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <BsTypeUnderline />
        </button>
        <button
          onClick={_onHeaderOneClick.bind()}
          className={` ${
            selectHeading === "one" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading1 />
        </button>
        <button
          onClick={_onHeaderTwoClick.bind()}
          className={` ${
            selectHeading === "two" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading2 />
        </button>
        <button
          onClick={_onHeaderThreeClick.bind()}
          className={` ${
            selectHeading === "three" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading3 />
        </button>
        <button
          onClick={_onHeaderFourClick.bind()}
          className={` ${
            selectHeading === "four" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading4 />
        </button>
        <button
          onClick={_onHeaderFiveClick.bind()}
          className={` ${
            selectHeading === "five" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading5 />
        </button>
        <button
          onClick={_onHeaderSixClick.bind()}
          className={` ${
            selectHeading === "six" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <LuHeading6 />
        </button>
        <button
          onClick={_onOrderListClick.bind()}
          className={` ${
            selectList === "Ordered" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <MdFormatListNumbered />
        </button>
        <button
          onClick={_onUnorderListClick.bind()}
          className={` ${
            selectList === "Unordered" ? "bg-gray-200" : ""
          } w-8 h-8 rounded-full object-cover text-center p-2`}
        >
          <MdFormatListBulleted />
        </button>
        <button
          onClick={_onCodeClick.bind()}
          className="hover:bg-gray-200 w-8 h-8 rounded-full object-cover text-center p-2"
        >
          <FaCode />
        </button>
      </div>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Describe what's on your mind..."
      />
    </div>
  );
};

export default CustomEditor;
