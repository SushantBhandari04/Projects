import { Input } from "./Input";
import { Button } from "./button";
import { CrossIcon } from "./icons";
import { TypeInput } from "./TypeInput";
import { Dispatch, SetStateAction, useRef} from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Type } from "../pages/dashboard";
import { ObjectId } from "mongodb";

export function AddContentModal({ setOpen, setContent }: { setOpen: (prop: boolean) => void , setContent:Dispatch<SetStateAction<{title:string, link:string, type:Type, _id:ObjectId }[]>>}) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLSelectElement | null>(null);

  async function submit(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title: titleRef.current?.value,
            link: linkRef.current?.value,
            type: typeRef.current?.value
        },{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        console.log("Modal ")
        
        console.log(response.data.content);
        setContent(prev=>[...prev,response.data.content]);
        setOpen(false);
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300 ease-in-out">
      <div className="bg-white h-3/5 w-2/5 border-2 rounded-lg p-6 flex flex-col gap-10 items-center shadow-lg">
        <div className="place-self-end w-fit fixed">
          <CrossIcon onClick={() => setOpen(false)} />
        </div>
        <div className="w-full flex justify-center items-center text-2xl font-semibold mb-4">
          Add Content
        </div>
        <div className="w-full flex flex-col gap-8 mb-4">
          <Input reference={titleRef} placeholder="Add title" title="Title : " />
          <Input reference={linkRef} placeholder="Add link" title="Link : " />
          <TypeInput reference={typeRef} />
        </div>
        <Button title="Submit" variant="primary" size="lg" onClick={()=>submit()} />
      </div>
    </div>
  );
}
