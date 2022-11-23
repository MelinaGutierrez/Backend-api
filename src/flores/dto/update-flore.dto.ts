import { PartialType } from '@nestjs/mapped-types';
import { CreateFloreDto } from './create-flore.dto';

export class UpdateFloreDto extends PartialType(CreateFloreDto) {}
