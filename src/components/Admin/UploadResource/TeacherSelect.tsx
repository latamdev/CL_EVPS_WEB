import React, { useState } from "react";
import Select from "react-select";
import { UploadResourceForm } from "./interface";

const teacherOptions = [{ label: "Paula Rojas", value: "Paula Rojas" }];

interface TeacherSelectProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const TeacherSelect: React.FC<TeacherSelectProps> = (props) => {
  const { formData, setFormData } = props;
  const [selectedTeacher, setSelectedTeacher] = useState<any>({
    label: formData?.teacher,
    value: formData?.teacher,
  });

  return (
    <Select
      options={teacherOptions}
      onChange={(value: any) => {
        setSelectedTeacher(value);
        setFormData({ ...formData, teacher: value.value });
      }}
      value={selectedTeacher}
      classNames={{
        control: (state) =>
          state.isFocused ? "select-focused-border" : "border-gray-300",
      }}
      classNamePrefix="tag-selector"
    />
  );
};

export default TeacherSelect;
