module.exports = {
  theme: {
    extend: {
      height: {
        "667": '667px',
      },
      minHeight: {
        "90vh": '90vh',
      },
      gridTemplateRows: {
        "intro-rows": "1fr 1fr 1fr 60px",
        "questions-rows": "1fr 15% 200px 20% 15%",
        "results": "100px 1fr 40px 350px 30px 60px"
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
