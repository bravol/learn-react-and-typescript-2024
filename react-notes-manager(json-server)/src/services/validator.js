export default class ValidatorService {
  static min(inputVlaue, min) {
    if (inputVlaue.length < min) {
      return `It must be more than ${min} characters`;
    }
  }
  static max(inputVlaue, max) {
    if (inputVlaue.length > max) {
      return `It must be less than ${max} characters`;
    }
  }
}
