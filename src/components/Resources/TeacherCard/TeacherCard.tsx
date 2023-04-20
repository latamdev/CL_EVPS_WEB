import React from "react";
import { Link } from "react-router-dom";
import { COUNTRY_FLAGS_API } from "./constants";
import { TeacherCardProps } from "./interfaces";

const TeacherCard: React.FC<TeacherCardProps> = (props) => {
  const { name, description, videosCount } = props;

  return (
    <div className="bg-white p-10 pb-2 flex flex-col space-y-2 shadow-lg rounded-lg border">
      <span className="text-xl">Profesor: {name}</span>
      <img
        src=""
        alt="teacher_picture"
        className="h-60 xl:w-full mx-auto w-60 rounded bg-gray-400"
      />

      <div className="flex flex-row gap-2 items-center justify-between">
        <Link
          to={"#"}
          className="text-primary border-b border-b-primary font-bold
           hover:border-b-blue-500 hover:cursor-pointer hover:text-blue-500"
        >
          {videosCount} videos
        </Link>
        |
        <span className="flex flex-row gap-2 items-center">
          Idiomas:
          <img
            alt="image_flag_US"
            src={`${COUNTRY_FLAGS_API}/US/flat/64.png`}
            className="w-6"
          />
          <img
            alt="image_flag_BR"
            src={`${COUNTRY_FLAGS_API}/BR/flat/64.png`}
            className="w-6"
          />
          <img
            alt="image_flag_ES"
            src={`${COUNTRY_FLAGS_API}/ES/flat/64.png`}
            className="w-6"
          />
        </span>
      </div>

      <p className="h-[7.4rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-danger">
        {description} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Rem officiis consequuntur impedit praesentium labore enim dolor nostrum
        aut quae ad, minus sint quam cumque accusantium architecto vero, soluta
        ducimus exercitationem! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus corrupti, beatae fugit sunt dolore atque,
        porro omnis explicabo adipisci aperiam aliquam, doloribus amet quaerat
        ea dolores molestias soluta obcaecati iste? lorem
      </p>
    </div>
  );
};

export default TeacherCard;
