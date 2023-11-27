import { z } from 'zod';
import type { Prisma } from '../../dist/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ReferralScalarFieldEnumSchema = z.enum(['id','given_name','surname','email','phone','address_number','address_street','address_suburb','address_state','address_postcode','address_country','created_at','updated_at','deleted_at']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// REFERRAL SCHEMA
/////////////////////////////////////////

export const ReferralSchema = z.object({
  id: z.string(),
  given_name: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.string(),
  address_number: z.string(),
  address_street: z.string(),
  address_suburb: z.string(),
  address_state: z.string(),
  address_postcode: z.string(),
  address_country: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  deleted_at: z.coerce.date().nullable(),
})

export type Referral = z.infer<typeof ReferralSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// REFERRAL
//------------------------------------------------------

export const ReferralSelectSchema: z.ZodType<Prisma.ReferralSelect> = z.object({
  id: z.boolean().optional(),
  given_name: z.boolean().optional(),
  surname: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address_number: z.boolean().optional(),
  address_street: z.boolean().optional(),
  address_suburb: z.boolean().optional(),
  address_state: z.boolean().optional(),
  address_postcode: z.boolean().optional(),
  address_country: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ReferralWhereInputSchema: z.ZodType<Prisma.ReferralWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  given_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_suburb: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const ReferralOrderByWithRelationInputSchema: z.ZodType<Prisma.ReferralOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address_number: z.lazy(() => SortOrderSchema).optional(),
  address_street: z.lazy(() => SortOrderSchema).optional(),
  address_suburb: z.lazy(() => SortOrderSchema).optional(),
  address_state: z.lazy(() => SortOrderSchema).optional(),
  address_postcode: z.lazy(() => SortOrderSchema).optional(),
  address_country: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const ReferralWhereUniqueInputSchema: z.ZodType<Prisma.ReferralWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  given_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_suburb: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address_country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const ReferralOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReferralOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address_number: z.lazy(() => SortOrderSchema).optional(),
  address_street: z.lazy(() => SortOrderSchema).optional(),
  address_suburb: z.lazy(() => SortOrderSchema).optional(),
  address_state: z.lazy(() => SortOrderSchema).optional(),
  address_postcode: z.lazy(() => SortOrderSchema).optional(),
  address_country: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ReferralCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReferralMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReferralMinOrderByAggregateInputSchema).optional()
}).strict();

export const ReferralScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReferralScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema),z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema),z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  given_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_street: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_suburb: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_postcode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address_country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const ReferralCreateInputSchema: z.ZodType<Prisma.ReferralCreateInput> = z.object({
  id: z.string().optional(),
  given_name: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.string(),
  address_number: z.string(),
  address_street: z.string(),
  address_suburb: z.string(),
  address_state: z.string(),
  address_postcode: z.string(),
  address_country: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();

export const ReferralUncheckedCreateInputSchema: z.ZodType<Prisma.ReferralUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  given_name: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.string(),
  address_number: z.string(),
  address_street: z.string(),
  address_suburb: z.string(),
  address_state: z.string(),
  address_postcode: z.string(),
  address_country: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();

export const ReferralUpdateInputSchema: z.ZodType<Prisma.ReferralUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  given_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_suburb: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReferralUncheckedUpdateInputSchema: z.ZodType<Prisma.ReferralUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  given_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_suburb: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReferralCreateManyInputSchema: z.ZodType<Prisma.ReferralCreateManyInput> = z.object({
  id: z.string().optional(),
  given_name: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.string(),
  address_number: z.string(),
  address_street: z.string(),
  address_suburb: z.string(),
  address_state: z.string(),
  address_postcode: z.string(),
  address_country: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();

export const ReferralUpdateManyMutationInputSchema: z.ZodType<Prisma.ReferralUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  given_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_suburb: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReferralUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReferralUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  given_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_suburb: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ReferralCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address_number: z.lazy(() => SortOrderSchema).optional(),
  address_street: z.lazy(() => SortOrderSchema).optional(),
  address_suburb: z.lazy(() => SortOrderSchema).optional(),
  address_state: z.lazy(() => SortOrderSchema).optional(),
  address_postcode: z.lazy(() => SortOrderSchema).optional(),
  address_country: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address_number: z.lazy(() => SortOrderSchema).optional(),
  address_street: z.lazy(() => SortOrderSchema).optional(),
  address_suburb: z.lazy(() => SortOrderSchema).optional(),
  address_state: z.lazy(() => SortOrderSchema).optional(),
  address_postcode: z.lazy(() => SortOrderSchema).optional(),
  address_country: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address_number: z.lazy(() => SortOrderSchema).optional(),
  address_street: z.lazy(() => SortOrderSchema).optional(),
  address_suburb: z.lazy(() => SortOrderSchema).optional(),
  address_state: z.lazy(() => SortOrderSchema).optional(),
  address_postcode: z.lazy(() => SortOrderSchema).optional(),
  address_country: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ReferralFindFirstArgsSchema: z.ZodType<Prisma.ReferralFindFirstArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReferralFindFirstOrThrowArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralFindManyArgsSchema: z.ZodType<Prisma.ReferralFindManyArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralAggregateArgsSchema: z.ZodType<Prisma.ReferralAggregateArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReferralGroupByArgsSchema: z.ZodType<Prisma.ReferralGroupByArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithAggregationInputSchema.array(),ReferralOrderByWithAggregationInputSchema ]).optional(),
  by: ReferralScalarFieldEnumSchema.array(),
  having: ReferralScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReferralFindUniqueArgsSchema: z.ZodType<Prisma.ReferralFindUniqueArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReferralFindUniqueOrThrowArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralCreateArgsSchema: z.ZodType<Prisma.ReferralCreateArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  data: z.union([ ReferralCreateInputSchema,ReferralUncheckedCreateInputSchema ]),
}).strict() ;

export const ReferralUpsertArgsSchema: z.ZodType<Prisma.ReferralUpsertArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
  create: z.union([ ReferralCreateInputSchema,ReferralUncheckedCreateInputSchema ]),
  update: z.union([ ReferralUpdateInputSchema,ReferralUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReferralCreateManyArgsSchema: z.ZodType<Prisma.ReferralCreateManyArgs> = z.object({
  data: z.union([ ReferralCreateManyInputSchema,ReferralCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReferralDeleteArgsSchema: z.ZodType<Prisma.ReferralDeleteArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralUpdateArgsSchema: z.ZodType<Prisma.ReferralUpdateArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  data: z.union([ ReferralUpdateInputSchema,ReferralUncheckedUpdateInputSchema ]),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralUpdateManyArgsSchema: z.ZodType<Prisma.ReferralUpdateManyArgs> = z.object({
  data: z.union([ ReferralUpdateManyMutationInputSchema,ReferralUncheckedUpdateManyInputSchema ]),
  where: ReferralWhereInputSchema.optional(),
}).strict() ;

export const ReferralDeleteManyArgsSchema: z.ZodType<Prisma.ReferralDeleteManyArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
}).strict() ;