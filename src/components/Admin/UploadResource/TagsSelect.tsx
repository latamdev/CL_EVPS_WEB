import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { UploadResourceForm } from "./interface";
import { useQuery } from "@tanstack/react-query";
import { getAllTags } from "./service";

const animatedComponents = makeAnimated();

interface TagsSelectProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const TagsSelect: React.FC<TagsSelectProps> = (props) => {
  const { formData, setFormData } = props;
  const [selectedTags, setSelectedTags] = useState<any>(formData?.tags);
  const [options, setOptions] = useState();

  useQuery({
    queryKey: ["GET_ALL_TAGS_QUERY"],
    queryFn: getAllTags,
    onSuccess: (data) => {
      setOptions(
        data.map((tag) => {
          return { value: tag.name, label: tag.name };
        })
      );
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleOnChange = (value: any) => {
    setSelectedTags(value);

    setFormData({ ...formData, tags: value });
  };

  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      value={selectedTags}
      onChange={(value: any) => handleOnChange(value)}
      placeholder="Agrega un tag y presiona enter..."
      classNames={{
        control: (state) =>
          state.isFocused ? "select-focused-border" : "border-gray-300",
      }}
      classNamePrefix="tag-selector"
    />
  );
};

export default TagsSelect;
