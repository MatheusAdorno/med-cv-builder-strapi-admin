import type { Struct, Schema } from '@strapi/strapi';

export interface WorkExperienceWorkExperience extends Struct.ComponentSchema {
  collectionName: 'components_work_experience_work_experiences';
  info: {
    displayName: 'workExperience';
    icon: 'paint';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    local: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    country: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.Text;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'check';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ResearchExperienceResearchExperience
  extends Struct.ComponentSchema {
  collectionName: 'components_research_experience_research_experiences';
  info: {
    displayName: 'researchExperience';
    icon: 'eye';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    country: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface RelevantCoursesRelevantCourses extends Struct.ComponentSchema {
  collectionName: 'components_relevant_courses_relevant_courses';
  info: {
    displayName: 'relevantCourses';
    icon: 'file';
  };
  attributes: {
    courseName: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ExtracurricularActivitiesExtracurricularActivities
  extends Struct.ComponentSchema {
  collectionName: 'components_extracurricular_activities_extracurricular_activities';
  info: {
    displayName: 'extracurricularActivities';
    icon: 'earth';
    description: '';
  };
  attributes: {
    activity: Schema.Attribute.String;
    organization: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    country: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'work-experience.work-experience': WorkExperienceWorkExperience;
      'skills.skills': SkillsSkills;
      'research-experience.research-experience': ResearchExperienceResearchExperience;
      'relevant-courses.relevant-courses': RelevantCoursesRelevantCourses;
      'extracurricular-activities.extracurricular-activities': ExtracurricularActivitiesExtracurricularActivities;
      'education.education': EducationEducation;
    }
  }
}
