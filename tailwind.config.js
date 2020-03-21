module.exports = {
  theme: {
    extend: {
      spacing: {
        "192": "48rem"
      },
      gridTemplateRows: {
        "intro-rows": "1fr 1fr 1fr 60px",
        "questions-rows": "1fr 3fr 30% 20% 15%",
        "results": "3fr 1fr 2fr 300px 60px"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  }
};
