import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      ...value,
      name: value.name.toUpperCase(),
      email: value.email.toUpperCase(),
    };
  }
}
