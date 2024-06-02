import ProgrammingLang from "@/DB/ProgrammingLang";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import CodeEditor from "@uiw/react-textarea-code-editor";
const CodeBox = () => {
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("java");
  return (
    <>
      <div className="relative">
        <Select
          className="justify-self-end"
          onValueChange={(value) => {
            setLang(value);
            setCode("");
          }}
        >
          <SelectTrigger className="w-[90px] absolute top-0 right-0 rounded-none rounded-tr-sm bg-primary text-white border-[1px] border-primary  z-20 px-[6px] py-1 h-fit text-xs">
            <SelectValue placeholder="Language" className="text-sm" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-sm">Language</SelectLabel>
              {ProgrammingLang?.map((curr, index) => {
                return (
                  curr && (
                    <SelectItem value={curr} key={index} className="text-sm">
                      {curr}
                    </SelectItem>
                  )
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <CodeEditor
          value={code}
          language={lang}
          placeholder={`Please enter ${lang.toUpperCase()} code.`}
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            minHeight: "280px",
            maxHeight: "320px",
            overflowY: "auto",
            fontSize: "13px",
            borderRadius: "4px",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </>
  );
};

export default CodeBox;
