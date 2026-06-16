import instance from "../../interseptor";

export const sendQuestion = async (
    houseId:number,
    question: string,
   ) => {
  try {
    const response = await instance.post(
        "/api/property-QA/question",
        {
            houseId:houseId,
            question:question,
        }
      );
      return {
          success: true,
          message:"سوال  شما با موفقیت ارسال شد",
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
 
