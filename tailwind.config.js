module.exports = {
  theme: {
    extend: {
      height: {
        "600": '600px',
      },
      gridTemplateRows: {
        "intro-rows": "1fr 1fr 1fr 60px",
        "questions-rows": "1fr 3fr 40% 20% 15%",
        "results": "3fr 1fr 2fr 300px 30px 60px"
      }
    }
  },
  corePlugins: {
    float: false
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  }
};
