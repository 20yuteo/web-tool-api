CREATE TYPE job_category AS ENUM (
  'SYSTEM_DEVELOPMENT',
  'WEB_PRODUCTION_AND_WEB_DESIGN',
  'DESIGN_PRODUCTION',
  'WRITING_AND_NAMING',
  'TASKS_AND_WORK',
  'PHOTOGRAPHY_VIDEO_AND_NARRATION',
  'TRANSLATION_AND_INTERPRETATION',
  'OFFICE_WORK_CONSULTING_PROFESSIONAL_AND_OTHERS',
  'SALES_MARKETING_PLANNING_AND_PUBLIC_RELATIONS',
  'SPECIAL_FEATURES'
);

create table users
(
  user_id text UNIQUE,
  job_category job_category,
  experience text null,
  business_and_skills text null,
  archivement text null,
  activity_hours text null,
  contact_access text null,
  talent text null,
  createdAt timestamp with time zone,
  updatedAt timestamp with time zone
);

create table requests
(
  request_id serial PRIMARY KEY,
  user_id text FOREIGN KEY REFERENCES users(user_id) ON DELETE CASCADE,
  title text,
  describe text,
  createdAt timestamp with time zone,
  updatedAt timestamp with time zone
);

insert into users (user_id, job_category, createdAt, updatedAt) values ('user1', 'SYSTEM_DEVELOPMENT', now(), now());
