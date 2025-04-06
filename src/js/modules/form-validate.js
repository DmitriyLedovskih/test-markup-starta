import IMask from "imask";
import JustValidate from "just-validate";

const formValidate = () => {
  const inputTel = document.querySelectorAll("input[type='tel']");

  inputTel.forEach((el) => {
    new IMask(el, {
      mask: "+{7} (000) 000-00-00",
    });
  });

  new JustValidate(".form__fields", {
    validateBeforeSubmitting: true,
    errorLabelCssClass: ["form__fields-error"],
    errorFieldCssClass: ["form__fields-field--error"],
  })
    .addField(document.querySelector("#name"), [
      {
        rule: "required",
        errorMessage: "Обязательно к заполнению",
      },
    ])
    .addField(document.querySelector("#tel"), [
      {
        rule: "required",
        errorMessage: "Обязательно к заполнению",
      },
    ])
    .addField(document.querySelector("#email"), [
      {
        rule: "required",
        errorMessage: "Обязательно к заполнению",
      },
      {
        rule: "email",
        errorMessage: "Введите корректную эл. почту",
      },
    ])
    .addField(document.querySelector("#message"), [
      {
        rule: "required",
        errorMessage: "Обязательно к заполнению",
      },
    ]);
};

export default formValidate;
