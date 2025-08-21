export type OptionAnswer = {
  type: "option";
  question_id: string;
  option_id: string;
};

export type TextAnswer = {
  type: "text";
  question_id: string;
  answer_text: string;
};

export type Answer = OptionAnswer | TextAnswer;
