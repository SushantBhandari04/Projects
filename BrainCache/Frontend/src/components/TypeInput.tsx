import { useState, ChangeEvent, MutableRefObject } from "react";

export function TypeInput({reference}:{reference: MutableRefObject<HTMLSelectElement | null>;}) {
  // Define the type for the select options
  type ContentType = "youtube" | "twitter" | "document" | "link";

  // Use state with a specific type
  const [type, setType] = useState<ContentType>("youtube");

  // Event handler with a properly typed event
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as ContentType);
  };

  return (
    <div className="flex w-full h-10 justify-center gap-4">
      <div className="flex text-xl font-medium">Type :</div>
      <select
      ref={reference}
        className="w-3/5 text-md p-2 text-gray-500 cursor-pointer items-center h-full border-2 rounded-md"
        name="Type"
        id="type"
        value={type}
        onChange={handleChange}
      >
        <option value="youtube">YouTube</option>
        <option value="twitter">Twitter</option>
        <option value="document">Document</option>
        <option value="link">Link</option>
      </select>
    </div>
  );
}
