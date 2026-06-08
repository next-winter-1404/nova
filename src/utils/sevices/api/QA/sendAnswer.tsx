import instance from "../../interseptor";

export const postAnswer = async (
    questionId:number,
    answer: string,
   ) => {
  try {
    const response = await instance.post(
        "/api/property-QA/answer",
        {
            questionId:questionId,
            answer:answer,
        }
      );
      return {
          success: true,
          message:"پاسخ  شما با موفقیت ارسال شد",
        };
  } catch (error:any) {
    return {
        success: false,
        message:
          error.message ||
          "خطایی رخ داد",
      };
  }
  };
 
