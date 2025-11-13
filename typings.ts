/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type CarsCustomizer = CollectionCustomizer<Schema, 'cars'>;
export type CarsRecord = TPartialRow<Schema, 'cars'>;
export type CarsConditionTree = TConditionTree<Schema, 'cars'>;
export type CarsFilter = TPaginatedFilter<Schema, 'cars'>;
export type CarsSortClause = TSortClause<Schema, 'cars'>;
export type CarsAggregation = TAggregation<Schema, 'cars'>;

export type ProductsCustomizer = CollectionCustomizer<Schema, 'products'>;
export type ProductsRecord = TPartialRow<Schema, 'products'>;
export type ProductsConditionTree = TConditionTree<Schema, 'products'>;
export type ProductsFilter = TPaginatedFilter<Schema, 'products'>;
export type ProductsSortClause = TSortClause<Schema, 'products'>;
export type ProductsAggregation = TAggregation<Schema, 'products'>;

export type StudentCustomizer = CollectionCustomizer<Schema, 'student'>;
export type StudentRecord = TPartialRow<Schema, 'student'>;
export type StudentConditionTree = TConditionTree<Schema, 'student'>;
export type StudentFilter = TPaginatedFilter<Schema, 'student'>;
export type StudentSortClause = TSortClause<Schema, 'student'>;
export type StudentAggregation = TAggregation<Schema, 'student'>;

export type UsersCustomizer = CollectionCustomizer<Schema, 'users'>;
export type UsersRecord = TPartialRow<Schema, 'users'>;
export type UsersConditionTree = TConditionTree<Schema, 'users'>;
export type UsersFilter = TPaginatedFilter<Schema, 'users'>;
export type UsersSortClause = TSortClause<Schema, 'users'>;
export type UsersAggregation = TAggregation<Schema, 'users'>;


export type Schema = {
  'cars': {
    plain: {
      'brand': string | null;
      'id': number;
      'model': string | null;
      'year': number | null;
    };
    nested: {};
    flat: {};
  };
  'products': {
    plain: {
      'id': number;
      'name': string;
      'owner_id': number;
      'price': number;
    };
    nested: {
      'owner': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'owner:email': string | null;
      'owner:id': number;
      'owner:lastname': string | null;
      'owner:name': string | null;
    };
  };
  'student': {
    plain: {
      'age': number | null;
      'name': string | null;
    };
    nested: {};
    flat: {};
  };
  'users': {
    plain: {
      'email': string | null;
      'id': number;
      'lastname': string | null;
      'name': string | null;
    };
    nested: {};
    flat: {};
  };
};
