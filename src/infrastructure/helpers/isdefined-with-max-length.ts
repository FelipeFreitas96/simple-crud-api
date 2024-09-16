import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDefinedWithMaxLength', async: false })
class IsDefinedWithMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    return (
      args.value !== undefined &&
      args.value !== null &&
      args.value !== '' &&
      args.value.length < args.constraints[0].maxLength
    );
  }

  defaultMessage(args: ValidationArguments) {
    const { property, maxLength } = args.constraints[0];
    if (args.value === undefined || args.value === null || args.value === '') {
      return `${property} is required`;
    }

    if (args.value.length >= maxLength) {
      return `${property} is too long`;
    }
  }
}

export function IsDefinedWithMaxLength(
  opts: { maxLength: number; property: string },
  validationOptions?: ValidationOptions,
) {
  return Validate(IsDefinedWithMaxLengthConstraint, [opts], validationOptions);
}
