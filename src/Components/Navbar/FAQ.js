import { Box } from "@mui/material";
import React, { useState } from "react";

function FAQ() {
  const QuestionList = [
    {
      question: "Where do I collect my product after renting from your site ? ",
      answer:
        "Your product will be deliver to your address you provided during renting products. ",
    },
    {
      question: "How many prior we need book our product?",
      answer: "prefered will 2-3 days but you can do one day before as well",
    },
    {
      question: "How can I cancel the rented product",
      answer:
        "Yes !! you can cancel the product anytime, we have standard process to cancel the product. please check out !!",
    },
  ];

  return (
    <>
      <h1 style={{ padding: "20px" }}> Frequently asked Questions</h1>

      <Box
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-around",
          lineHeight: "1.9",
          textAlign: "start",
        }}
      >
        <Box style={{ width: "50%" }}>
          <img
            style={{ width: "600px", height: "400px", marginLeft: "50px" }}
            src="Images/faq1.jpg"
            class="Image"
          />
        </Box>
        <Box
          style={{
            width: "50%",
            height: "100%",
            display: "grid",
            padding: "10px",
          }}
        >
          <h3> we know you have lot's of Question in your mind </h3>
          <h4 style={{ marginTop: "20px" }}>
            Don't worry here we have given all common question that you might
            have !!!
          </h4>

          <Box style={{ textAlign: "start", marginTop: "50px" }}>
            <hr></hr>
            <h3>PRODUCT</h3>
            <h4>The right product when you need it on equipment rental</h4>
            <p style={{ marginTop: "30px", lineHeight: "1.3" }}>
              The equipment rental industry has the specific product for the
              specific job leading to efficiency gains. Equipment is regularly
              maintained and renting ensures a high quality and reliability of
              the product when on site.
            </p>
            <h4 style={{ marginTop: "30px", lineHeight: "1.3" }}>
              Please click below question to find out the answer
            </h4>
          </Box>
        </Box>
      </Box>

      {QuestionList.map((QAset) => (
        <QuestionBox QuestionList={QAset} />
      ))}

      {/* <QuestionBox /> */}
    </>
  );
}

function QuestionBox({ QuestionList }) {
  const [answer, setAnswer] = useState(false);

  const click = () => {
    setAnswer(!answer);
  };

  const totalBoxStyle = {
    margin: "40px auto",
    width: "90%",
    height: answer ? "80px" : "40px",
    boxShadow: "2px 3px 3px 2px grey",
    textAlign: "start",
  };

  const QuestionBoxStyle = {
    height: "40px",
    padding: "5px",
    marginLeft: "10px",
    display: "flex",
  };

  const AnswerBoxStyle = {
    display: answer ? "" : "none",
    height: "80px",
    padding: "5px",
    marginLeft: "10px",
    display: "flex",
  };

  return (
    <>
      <Box style={totalBoxStyle} onClick={click}>
        <Box style={QuestionBoxStyle}>Question :{QuestionList.question}</Box>
        <Box style={AnswerBoxStyle}>
          {answer ? ` Answer : ${QuestionList.answer}` : ""}
        </Box>
      </Box>
    </>
  );
}

export default FAQ;
