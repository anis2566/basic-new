
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model House
 * 
 */
export type House = $Result.DefaultSelection<Prisma.$HousePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Counter
 * 
 */
export type Counter = $Result.DefaultSelection<Prisma.$CounterPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model AdmissionFee
 * 
 */
export type AdmissionFee = $Result.DefaultSelection<Prisma.$AdmissionFeePayload>
/**
 * Model SalaryFee
 * 
 */
export type SalaryFee = $Result.DefaultSelection<Prisma.$SalaryFeePayload>
/**
 * Model AdmissionPayment
 * 
 */
export type AdmissionPayment = $Result.DefaultSelection<Prisma.$AdmissionPaymentPayload>
/**
 * Model SalaryPayment
 * 
 */
export type SalaryPayment = $Result.DefaultSelection<Prisma.$SalaryPaymentPayload>
/**
 * Model OtherPayment
 * 
 */
export type OtherPayment = $Result.DefaultSelection<Prisma.$OtherPaymentPayload>
/**
 * Model HousePayment
 * 
 */
export type HousePayment = $Result.DefaultSelection<Prisma.$HousePaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.counter`: Exposes CRUD operations for the **Counter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counters
    * const counters = await prisma.counter.findMany()
    * ```
    */
  get counter(): Prisma.CounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admissionFee`: Exposes CRUD operations for the **AdmissionFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmissionFees
    * const admissionFees = await prisma.admissionFee.findMany()
    * ```
    */
  get admissionFee(): Prisma.AdmissionFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salaryFee`: Exposes CRUD operations for the **SalaryFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryFees
    * const salaryFees = await prisma.salaryFee.findMany()
    * ```
    */
  get salaryFee(): Prisma.SalaryFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admissionPayment`: Exposes CRUD operations for the **AdmissionPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmissionPayments
    * const admissionPayments = await prisma.admissionPayment.findMany()
    * ```
    */
  get admissionPayment(): Prisma.AdmissionPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salaryPayment`: Exposes CRUD operations for the **SalaryPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryPayments
    * const salaryPayments = await prisma.salaryPayment.findMany()
    * ```
    */
  get salaryPayment(): Prisma.SalaryPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherPayment`: Exposes CRUD operations for the **OtherPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherPayments
    * const otherPayments = await prisma.otherPayment.findMany()
    * ```
    */
  get otherPayment(): Prisma.OtherPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.housePayment`: Exposes CRUD operations for the **HousePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HousePayments
    * const housePayments = await prisma.housePayment.findMany()
    * ```
    */
  get housePayment(): Prisma.HousePaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    House: 'House',
    Room: 'Room',
    Counter: 'Counter',
    Student: 'Student',
    AdmissionFee: 'AdmissionFee',
    SalaryFee: 'SalaryFee',
    AdmissionPayment: 'AdmissionPayment',
    SalaryPayment: 'SalaryPayment',
    OtherPayment: 'OtherPayment',
    HousePayment: 'HousePayment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "house" | "room" | "counter" | "student" | "admissionFee" | "salaryFee" | "admissionPayment" | "salaryPayment" | "otherPayment" | "housePayment"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      House: {
        payload: Prisma.$HousePayload<ExtArgs>
        fields: Prisma.HouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findFirst: {
            args: Prisma.HouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findMany: {
            args: Prisma.HouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          create: {
            args: Prisma.HouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          createMany: {
            args: Prisma.HouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          update: {
            args: Prisma.HouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          deleteMany: {
            args: Prisma.HouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          aggregate: {
            args: Prisma.HouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouse>
          }
          groupBy: {
            args: Prisma.HouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HouseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HouseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HouseCountArgs<ExtArgs>
            result: $Utils.Optional<HouseCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Counter: {
        payload: Prisma.$CounterPayload<ExtArgs>
        fields: Prisma.CounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findFirst: {
            args: Prisma.CounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findMany: {
            args: Prisma.CounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          create: {
            args: Prisma.CounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          createMany: {
            args: Prisma.CounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          update: {
            args: Prisma.CounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          deleteMany: {
            args: Prisma.CounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          aggregate: {
            args: Prisma.CounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounter>
          }
          groupBy: {
            args: Prisma.CounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CounterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CounterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CounterCountArgs<ExtArgs>
            result: $Utils.Optional<CounterCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      AdmissionFee: {
        payload: Prisma.$AdmissionFeePayload<ExtArgs>
        fields: Prisma.AdmissionFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          findFirst: {
            args: Prisma.AdmissionFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          findMany: {
            args: Prisma.AdmissionFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>[]
          }
          create: {
            args: Prisma.AdmissionFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          createMany: {
            args: Prisma.AdmissionFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmissionFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          update: {
            args: Prisma.AdmissionFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          deleteMany: {
            args: Prisma.AdmissionFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionFeePayload>
          }
          aggregate: {
            args: Prisma.AdmissionFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissionFee>
          }
          groupBy: {
            args: Prisma.AdmissionFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionFeeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdmissionFeeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdmissionFeeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdmissionFeeCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionFeeCountAggregateOutputType> | number
          }
        }
      }
      SalaryFee: {
        payload: Prisma.$SalaryFeePayload<ExtArgs>
        fields: Prisma.SalaryFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          findFirst: {
            args: Prisma.SalaryFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          findMany: {
            args: Prisma.SalaryFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>[]
          }
          create: {
            args: Prisma.SalaryFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          createMany: {
            args: Prisma.SalaryFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalaryFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          update: {
            args: Prisma.SalaryFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          deleteMany: {
            args: Prisma.SalaryFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaryFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFeePayload>
          }
          aggregate: {
            args: Prisma.SalaryFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryFee>
          }
          groupBy: {
            args: Prisma.SalaryFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryFeeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SalaryFeeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SalaryFeeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SalaryFeeCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryFeeCountAggregateOutputType> | number
          }
        }
      }
      AdmissionPayment: {
        payload: Prisma.$AdmissionPaymentPayload<ExtArgs>
        fields: Prisma.AdmissionPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          findFirst: {
            args: Prisma.AdmissionPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          findMany: {
            args: Prisma.AdmissionPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>[]
          }
          create: {
            args: Prisma.AdmissionPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          createMany: {
            args: Prisma.AdmissionPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmissionPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          update: {
            args: Prisma.AdmissionPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPaymentPayload>
          }
          aggregate: {
            args: Prisma.AdmissionPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissionPayment>
          }
          groupBy: {
            args: Prisma.AdmissionPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionPaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdmissionPaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdmissionPaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdmissionPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionPaymentCountAggregateOutputType> | number
          }
        }
      }
      SalaryPayment: {
        payload: Prisma.$SalaryPaymentPayload<ExtArgs>
        fields: Prisma.SalaryPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          findFirst: {
            args: Prisma.SalaryPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          findMany: {
            args: Prisma.SalaryPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>[]
          }
          create: {
            args: Prisma.SalaryPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          createMany: {
            args: Prisma.SalaryPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalaryPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          update: {
            args: Prisma.SalaryPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SalaryPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaryPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPaymentPayload>
          }
          aggregate: {
            args: Prisma.SalaryPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryPayment>
          }
          groupBy: {
            args: Prisma.SalaryPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryPaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SalaryPaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SalaryPaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SalaryPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryPaymentCountAggregateOutputType> | number
          }
        }
      }
      OtherPayment: {
        payload: Prisma.$OtherPaymentPayload<ExtArgs>
        fields: Prisma.OtherPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          findFirst: {
            args: Prisma.OtherPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          findMany: {
            args: Prisma.OtherPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>[]
          }
          create: {
            args: Prisma.OtherPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          createMany: {
            args: Prisma.OtherPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtherPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          update: {
            args: Prisma.OtherPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          deleteMany: {
            args: Prisma.OtherPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtherPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherPaymentPayload>
          }
          aggregate: {
            args: Prisma.OtherPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherPayment>
          }
          groupBy: {
            args: Prisma.OtherPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherPaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OtherPaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OtherPaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OtherPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<OtherPaymentCountAggregateOutputType> | number
          }
        }
      }
      HousePayment: {
        payload: Prisma.$HousePaymentPayload<ExtArgs>
        fields: Prisma.HousePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HousePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HousePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          findFirst: {
            args: Prisma.HousePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HousePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          findMany: {
            args: Prisma.HousePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>[]
          }
          create: {
            args: Prisma.HousePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          createMany: {
            args: Prisma.HousePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HousePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          update: {
            args: Prisma.HousePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          deleteMany: {
            args: Prisma.HousePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HousePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HousePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePaymentPayload>
          }
          aggregate: {
            args: Prisma.HousePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousePayment>
          }
          groupBy: {
            args: Prisma.HousePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<HousePaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HousePaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HousePaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HousePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<HousePaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    house?: HouseOmit
    room?: RoomOmit
    counter?: CounterOmit
    student?: StudentOmit
    admissionFee?: AdmissionFeeOmit
    salaryFee?: SalaryFeeOmit
    admissionPayment?: AdmissionPaymentOmit
    salaryPayment?: SalaryPaymentOmit
    otherPayment?: OtherPaymentOmit
    housePayment?: HousePaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HouseCountOutputType
   */

  export type HouseCountOutputType = {
    rooms: number
    payments: number
  }

  export type HouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | HouseCountOutputTypeCountRoomsArgs
    payments?: boolean | HouseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     */
    select?: HouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HousePaymentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    admissionPayments: number
    salaryPayments: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissionPayments?: boolean | StudentCountOutputTypeCountAdmissionPaymentsArgs
    salaryPayments?: boolean | StudentCountOutputTypeCountSalaryPaymentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAdmissionPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionPaymentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSalaryPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: string | null
    status: string | null
    phone: string | null
    referalCode: string | null
    isNewUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: string | null
    status: string | null
    phone: string | null
    referalCode: string | null
    isNewUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    avatar: number
    role: number
    status: number
    phone: number
    referalCode: number
    isNewUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    status?: true
    phone?: true
    referalCode?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    status?: true
    phone?: true
    referalCode?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    status?: true
    phone?: true
    referalCode?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    name: string
    email: string
    avatar: string | null
    role: string
    status: string
    phone: string | null
    referalCode: string
    isNewUser: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    status?: boolean
    phone?: boolean
    referalCode?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    status?: boolean
    phone?: boolean
    referalCode?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "avatar" | "role" | "status" | "phone" | "referalCode" | "isNewUser" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      name: string
      email: string
      avatar: string | null
      role: string
      status: string
      phone: string | null
      referalCode: string
      isNewUser: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly referalCode: FieldRef<"User", 'String'>
    readonly isNewUser: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model House
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    roomCount: number | null
  }

  export type HouseSumAggregateOutputType = {
    roomCount: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    roomCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    roomCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    name: number
    roomCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseAvgAggregateInputType = {
    roomCount?: true
  }

  export type HouseSumAggregateInputType = {
    roomCount?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    name?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    name?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    name?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which House to aggregate.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithAggregationInput | HouseOrderByWithAggregationInput[]
    by: HouseScalarFieldEnum[] | HouseScalarFieldEnum
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: string
    name: string
    roomCount: number
    createdAt: Date
    updatedAt: Date
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | House$roomsArgs<ExtArgs>
    payments?: boolean | House$paymentsArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>



  export type HouseSelectScalar = {
    id?: boolean
    name?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "roomCount" | "createdAt" | "updatedAt", ExtArgs["result"]["house"]>
  export type HouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | House$roomsArgs<ExtArgs>
    payments?: boolean | House$paymentsArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "House"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      payments: Prisma.$HousePaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      roomCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["house"]>
    composites: {}
  }

  type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = $Result.GetResult<Prisma.$HousePayload, S>

  type HouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseCountAggregateInputType | true
    }

  export interface HouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['House'], meta: { name: 'House' } }
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseFindUniqueArgs>(args: SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one House that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseFindFirstArgs>(args?: SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseFindManyArgs>(args?: SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
     */
    create<T extends HouseCreateArgs>(args: SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Houses.
     * @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseCreateManyArgs>(args?: SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
     */
    delete<T extends HouseDeleteArgs>(args: SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseUpdateArgs>(args: SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseDeleteManyArgs>(args?: SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseUpdateManyArgs>(args: SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     */
    upsert<T extends HouseUpsertArgs>(args: SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * @param {HouseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const house = await prisma.house.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HouseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a House.
     * @param {HouseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const house = await prisma.house.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HouseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the House model
   */
  readonly fields: HouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends House$roomsArgs<ExtArgs> = {}>(args?: Subset<T, House$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends House$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, House$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the House model
   */
  interface HouseFieldRefs {
    readonly id: FieldRef<"House", 'String'>
    readonly name: FieldRef<"House", 'String'>
    readonly roomCount: FieldRef<"House", 'Int'>
    readonly createdAt: FieldRef<"House", 'DateTime'>
    readonly updatedAt: FieldRef<"House", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * House findUnique
   */
  export type HouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findFirst
   */
  export type HouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findMany
   */
  export type HouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which Houses to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House create
   */
  export type HouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to create a House.
     */
    data: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }

  /**
   * House createMany
   */
  export type HouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
  }

  /**
   * House update
   */
  export type HouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to update a House.
     */
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House upsert
   */
  export type HouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The filter to search for the House to update in case it exists.
     */
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     */
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }

  /**
   * House delete
   */
  export type HouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter which House to delete.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Houses to delete
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to delete.
     */
    limit?: number
  }

  /**
   * House findRaw
   */
  export type HouseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * House aggregateRaw
   */
  export type HouseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * House.rooms
   */
  export type House$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * House.payments
   */
  export type House$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    where?: HousePaymentWhereInput
    orderBy?: HousePaymentOrderByWithRelationInput | HousePaymentOrderByWithRelationInput[]
    cursor?: HousePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HousePaymentScalarFieldEnum | HousePaymentScalarFieldEnum[]
  }

  /**
   * House without action
   */
  export type HouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    houseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    houseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    availableTimes: number
    bookTimes: number
    houseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    availableTimes?: true
    bookTimes?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    availableTimes: string[]
    bookTimes: string[]
    houseId: string
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    availableTimes?: boolean
    bookTimes?: boolean
    houseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    availableTimes?: boolean
    bookTimes?: boolean
    houseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "availableTimes" | "bookTimes" | "houseId" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      house: Prisma.$HousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      availableTimes: string[]
      bookTimes: string[]
      houseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * @param {RoomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const room = await prisma.room.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Room.
     * @param {RoomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const room = await prisma.room.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends HouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseDefaultArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly availableTimes: FieldRef<"Room", 'String[]'>
    readonly bookTimes: FieldRef<"Room", 'String[]'>
    readonly houseId: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room findRaw
   */
  export type RoomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room aggregateRaw
   */
  export type RoomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Counter
   */

  export type AggregateCounter = {
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  export type CounterAvgAggregateOutputType = {
    value: number | null
  }

  export type CounterSumAggregateOutputType = {
    value: number | null
  }

  export type CounterMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounterCountAggregateOutputType = {
    id: number
    name: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CounterAvgAggregateInputType = {
    value?: true
  }

  export type CounterSumAggregateInputType = {
    value?: true
  }

  export type CounterMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounterMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounterCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counter to aggregate.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counters
    **/
    _count?: true | CounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounterMaxAggregateInputType
  }

  export type GetCounterAggregateType<T extends CounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounter[P]>
      : GetScalarType<T[P], AggregateCounter[P]>
  }




  export type CounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounterWhereInput
    orderBy?: CounterOrderByWithAggregationInput | CounterOrderByWithAggregationInput[]
    by: CounterScalarFieldEnum[] | CounterScalarFieldEnum
    having?: CounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounterCountAggregateInputType | true
    _avg?: CounterAvgAggregateInputType
    _sum?: CounterSumAggregateInputType
    _min?: CounterMinAggregateInputType
    _max?: CounterMaxAggregateInputType
  }

  export type CounterGroupByOutputType = {
    id: string
    name: string
    value: number
    createdAt: Date
    updatedAt: Date
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  type GetCounterGroupByPayload<T extends CounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounterGroupByOutputType[P]>
            : GetScalarType<T[P], CounterGroupByOutputType[P]>
        }
      >
    >


  export type CounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["counter"]>



  export type CounterSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["counter"]>

  export type $CounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["counter"]>
    composites: {}
  }

  type CounterGetPayload<S extends boolean | null | undefined | CounterDefaultArgs> = $Result.GetResult<Prisma.$CounterPayload, S>

  type CounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounterCountAggregateInputType | true
    }

  export interface CounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counter'], meta: { name: 'Counter' } }
    /**
     * Find zero or one Counter that matches the filter.
     * @param {CounterFindUniqueArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounterFindUniqueArgs>(args: SelectSubset<T, CounterFindUniqueArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Counter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounterFindUniqueOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounterFindFirstArgs>(args?: SelectSubset<T, CounterFindFirstArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counters
     * const counters = await prisma.counter.findMany()
     * 
     * // Get first 10 Counters
     * const counters = await prisma.counter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counterWithIdOnly = await prisma.counter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounterFindManyArgs>(args?: SelectSubset<T, CounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Counter.
     * @param {CounterCreateArgs} args - Arguments to create a Counter.
     * @example
     * // Create one Counter
     * const Counter = await prisma.counter.create({
     *   data: {
     *     // ... data to create a Counter
     *   }
     * })
     * 
     */
    create<T extends CounterCreateArgs>(args: SelectSubset<T, CounterCreateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Counters.
     * @param {CounterCreateManyArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounterCreateManyArgs>(args?: SelectSubset<T, CounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Counter.
     * @param {CounterDeleteArgs} args - Arguments to delete one Counter.
     * @example
     * // Delete one Counter
     * const Counter = await prisma.counter.delete({
     *   where: {
     *     // ... filter to delete one Counter
     *   }
     * })
     * 
     */
    delete<T extends CounterDeleteArgs>(args: SelectSubset<T, CounterDeleteArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Counter.
     * @param {CounterUpdateArgs} args - Arguments to update one Counter.
     * @example
     * // Update one Counter
     * const counter = await prisma.counter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounterUpdateArgs>(args: SelectSubset<T, CounterUpdateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Counters.
     * @param {CounterDeleteManyArgs} args - Arguments to filter Counters to delete.
     * @example
     * // Delete a few Counters
     * const { count } = await prisma.counter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounterDeleteManyArgs>(args?: SelectSubset<T, CounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounterUpdateManyArgs>(args: SelectSubset<T, CounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Counter.
     * @param {CounterUpsertArgs} args - Arguments to update or create a Counter.
     * @example
     * // Update or create a Counter
     * const counter = await prisma.counter.upsert({
     *   create: {
     *     // ... data to create a Counter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counter we want to update
     *   }
     * })
     */
    upsert<T extends CounterUpsertArgs>(args: SelectSubset<T, CounterUpsertArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * @param {CounterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const counter = await prisma.counter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CounterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Counter.
     * @param {CounterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const counter = await prisma.counter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CounterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterCountArgs} args - Arguments to filter Counters to count.
     * @example
     * // Count the number of Counters
     * const count = await prisma.counter.count({
     *   where: {
     *     // ... the filter for the Counters we want to count
     *   }
     * })
    **/
    count<T extends CounterCountArgs>(
      args?: Subset<T, CounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CounterAggregateArgs>(args: Subset<T, CounterAggregateArgs>): Prisma.PrismaPromise<GetCounterAggregateType<T>>

    /**
     * Group by Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounterGroupByArgs['orderBy'] }
        : { orderBy?: CounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counter model
   */
  readonly fields: CounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Counter model
   */
  interface CounterFieldRefs {
    readonly id: FieldRef<"Counter", 'String'>
    readonly name: FieldRef<"Counter", 'String'>
    readonly value: FieldRef<"Counter", 'Int'>
    readonly createdAt: FieldRef<"Counter", 'DateTime'>
    readonly updatedAt: FieldRef<"Counter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Counter findUnique
   */
  export type CounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findUniqueOrThrow
   */
  export type CounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findFirst
   */
  export type CounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findFirstOrThrow
   */
  export type CounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findMany
   */
  export type CounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counters to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter create
   */
  export type CounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to create a Counter.
     */
    data: XOR<CounterCreateInput, CounterUncheckedCreateInput>
  }

  /**
   * Counter createMany
   */
  export type CounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
  }

  /**
   * Counter update
   */
  export type CounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to update a Counter.
     */
    data: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
    /**
     * Choose, which Counter to update.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter updateMany
   */
  export type CounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to update.
     */
    limit?: number
  }

  /**
   * Counter upsert
   */
  export type CounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The filter to search for the Counter to update in case it exists.
     */
    where: CounterWhereUniqueInput
    /**
     * In case the Counter found by the `where` argument doesn't exist, create a new Counter with this data.
     */
    create: XOR<CounterCreateInput, CounterUncheckedCreateInput>
    /**
     * In case the Counter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
  }

  /**
   * Counter delete
   */
  export type CounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter which Counter to delete.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter deleteMany
   */
  export type CounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counters to delete
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to delete.
     */
    limit?: number
  }

  /**
   * Counter findRaw
   */
  export type CounterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter aggregateRaw
   */
  export type CounterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter without action
   */
  export type CounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studentId: number | null
    roll: number | null
    admissionFee: number | null
    salaryFee: number | null
  }

  export type StudentSumAggregateOutputType = {
    studentId: number | null
    roll: number | null
    admissionFee: number | null
    salaryFee: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    session: string | null
    studentId: number | null
    name: string | null
    nameBangla: string | null
    fName: string | null
    mName: string | null
    gender: string | null
    dob: Date | null
    nationality: string | null
    religion: string | null
    imageUrl: string | null
    school: string | null
    className: string | null
    section: string | null
    shift: string | null
    group: string | null
    roll: number | null
    fPhone: string | null
    mPhone: string | null
    presentHouseNo: string | null
    presentMoholla: string | null
    presentPost: string | null
    presentThana: string | null
    permanentVillage: string | null
    permanentPost: string | null
    permanentThana: string | null
    permanentDistrict: string | null
    isPresent: boolean | null
    leftReason: string | null
    admissionFee: number | null
    salaryFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    session: string | null
    studentId: number | null
    name: string | null
    nameBangla: string | null
    fName: string | null
    mName: string | null
    gender: string | null
    dob: Date | null
    nationality: string | null
    religion: string | null
    imageUrl: string | null
    school: string | null
    className: string | null
    section: string | null
    shift: string | null
    group: string | null
    roll: number | null
    fPhone: string | null
    mPhone: string | null
    presentHouseNo: string | null
    presentMoholla: string | null
    presentPost: string | null
    presentThana: string | null
    permanentVillage: string | null
    permanentPost: string | null
    permanentThana: string | null
    permanentDistrict: string | null
    isPresent: boolean | null
    leftReason: string | null
    admissionFee: number | null
    salaryFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    session: number
    studentId: number
    name: number
    nameBangla: number
    fName: number
    mName: number
    gender: number
    dob: number
    nationality: number
    religion: number
    imageUrl: number
    school: number
    className: number
    section: number
    shift: number
    group: number
    roll: number
    fPhone: number
    mPhone: number
    presentHouseNo: number
    presentMoholla: number
    presentPost: number
    presentThana: number
    permanentVillage: number
    permanentPost: number
    permanentThana: number
    permanentDistrict: number
    isPresent: number
    leftReason: number
    admissionFee: number
    salaryFee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studentId?: true
    roll?: true
    admissionFee?: true
    salaryFee?: true
  }

  export type StudentSumAggregateInputType = {
    studentId?: true
    roll?: true
    admissionFee?: true
    salaryFee?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    session?: true
    studentId?: true
    name?: true
    nameBangla?: true
    fName?: true
    mName?: true
    gender?: true
    dob?: true
    nationality?: true
    religion?: true
    imageUrl?: true
    school?: true
    className?: true
    section?: true
    shift?: true
    group?: true
    roll?: true
    fPhone?: true
    mPhone?: true
    presentHouseNo?: true
    presentMoholla?: true
    presentPost?: true
    presentThana?: true
    permanentVillage?: true
    permanentPost?: true
    permanentThana?: true
    permanentDistrict?: true
    isPresent?: true
    leftReason?: true
    admissionFee?: true
    salaryFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    session?: true
    studentId?: true
    name?: true
    nameBangla?: true
    fName?: true
    mName?: true
    gender?: true
    dob?: true
    nationality?: true
    religion?: true
    imageUrl?: true
    school?: true
    className?: true
    section?: true
    shift?: true
    group?: true
    roll?: true
    fPhone?: true
    mPhone?: true
    presentHouseNo?: true
    presentMoholla?: true
    presentPost?: true
    presentThana?: true
    permanentVillage?: true
    permanentPost?: true
    permanentThana?: true
    permanentDistrict?: true
    isPresent?: true
    leftReason?: true
    admissionFee?: true
    salaryFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    session?: true
    studentId?: true
    name?: true
    nameBangla?: true
    fName?: true
    mName?: true
    gender?: true
    dob?: true
    nationality?: true
    religion?: true
    imageUrl?: true
    school?: true
    className?: true
    section?: true
    shift?: true
    group?: true
    roll?: true
    fPhone?: true
    mPhone?: true
    presentHouseNo?: true
    presentMoholla?: true
    presentPost?: true
    presentThana?: true
    permanentVillage?: true
    permanentPost?: true
    permanentThana?: true
    permanentDistrict?: true
    isPresent?: true
    leftReason?: true
    admissionFee?: true
    salaryFee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date
    nationality: string
    religion: string
    imageUrl: string | null
    school: string
    className: string
    section: string | null
    shift: string | null
    group: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent: boolean
    leftReason: string | null
    admissionFee: number
    salaryFee: number
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    studentId?: boolean
    name?: boolean
    nameBangla?: boolean
    fName?: boolean
    mName?: boolean
    gender?: boolean
    dob?: boolean
    nationality?: boolean
    religion?: boolean
    imageUrl?: boolean
    school?: boolean
    className?: boolean
    section?: boolean
    shift?: boolean
    group?: boolean
    roll?: boolean
    fPhone?: boolean
    mPhone?: boolean
    presentHouseNo?: boolean
    presentMoholla?: boolean
    presentPost?: boolean
    presentThana?: boolean
    permanentVillage?: boolean
    permanentPost?: boolean
    permanentThana?: boolean
    permanentDistrict?: boolean
    isPresent?: boolean
    leftReason?: boolean
    admissionFee?: boolean
    salaryFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissionPayments?: boolean | Student$admissionPaymentsArgs<ExtArgs>
    salaryPayments?: boolean | Student$salaryPaymentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    session?: boolean
    studentId?: boolean
    name?: boolean
    nameBangla?: boolean
    fName?: boolean
    mName?: boolean
    gender?: boolean
    dob?: boolean
    nationality?: boolean
    religion?: boolean
    imageUrl?: boolean
    school?: boolean
    className?: boolean
    section?: boolean
    shift?: boolean
    group?: boolean
    roll?: boolean
    fPhone?: boolean
    mPhone?: boolean
    presentHouseNo?: boolean
    presentMoholla?: boolean
    presentPost?: boolean
    presentThana?: boolean
    permanentVillage?: boolean
    permanentPost?: boolean
    permanentThana?: boolean
    permanentDistrict?: boolean
    isPresent?: boolean
    leftReason?: boolean
    admissionFee?: boolean
    salaryFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session" | "studentId" | "name" | "nameBangla" | "fName" | "mName" | "gender" | "dob" | "nationality" | "religion" | "imageUrl" | "school" | "className" | "section" | "shift" | "group" | "roll" | "fPhone" | "mPhone" | "presentHouseNo" | "presentMoholla" | "presentPost" | "presentThana" | "permanentVillage" | "permanentPost" | "permanentThana" | "permanentDistrict" | "isPresent" | "leftReason" | "admissionFee" | "salaryFee" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissionPayments?: boolean | Student$admissionPaymentsArgs<ExtArgs>
    salaryPayments?: boolean | Student$salaryPaymentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      admissionPayments: Prisma.$AdmissionPaymentPayload<ExtArgs>[]
      salaryPayments: Prisma.$SalaryPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session: string
      studentId: number
      name: string
      nameBangla: string
      fName: string
      mName: string
      gender: string
      dob: Date
      nationality: string
      religion: string
      imageUrl: string | null
      school: string
      className: string
      section: string | null
      shift: string | null
      group: string | null
      roll: number
      fPhone: string
      mPhone: string
      presentHouseNo: string
      presentMoholla: string
      presentPost: string
      presentThana: string
      permanentVillage: string
      permanentPost: string
      permanentThana: string
      permanentDistrict: string
      isPresent: boolean
      leftReason: string | null
      admissionFee: number
      salaryFee: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admissionPayments<T extends Student$admissionPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$admissionPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salaryPayments<T extends Student$salaryPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$salaryPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly session: FieldRef<"Student", 'String'>
    readonly studentId: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly nameBangla: FieldRef<"Student", 'String'>
    readonly fName: FieldRef<"Student", 'String'>
    readonly mName: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'DateTime'>
    readonly nationality: FieldRef<"Student", 'String'>
    readonly religion: FieldRef<"Student", 'String'>
    readonly imageUrl: FieldRef<"Student", 'String'>
    readonly school: FieldRef<"Student", 'String'>
    readonly className: FieldRef<"Student", 'String'>
    readonly section: FieldRef<"Student", 'String'>
    readonly shift: FieldRef<"Student", 'String'>
    readonly group: FieldRef<"Student", 'String'>
    readonly roll: FieldRef<"Student", 'Int'>
    readonly fPhone: FieldRef<"Student", 'String'>
    readonly mPhone: FieldRef<"Student", 'String'>
    readonly presentHouseNo: FieldRef<"Student", 'String'>
    readonly presentMoholla: FieldRef<"Student", 'String'>
    readonly presentPost: FieldRef<"Student", 'String'>
    readonly presentThana: FieldRef<"Student", 'String'>
    readonly permanentVillage: FieldRef<"Student", 'String'>
    readonly permanentPost: FieldRef<"Student", 'String'>
    readonly permanentThana: FieldRef<"Student", 'String'>
    readonly permanentDistrict: FieldRef<"Student", 'String'>
    readonly isPresent: FieldRef<"Student", 'Boolean'>
    readonly leftReason: FieldRef<"Student", 'String'>
    readonly admissionFee: FieldRef<"Student", 'Int'>
    readonly salaryFee: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student.admissionPayments
   */
  export type Student$admissionPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    where?: AdmissionPaymentWhereInput
    orderBy?: AdmissionPaymentOrderByWithRelationInput | AdmissionPaymentOrderByWithRelationInput[]
    cursor?: AdmissionPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionPaymentScalarFieldEnum | AdmissionPaymentScalarFieldEnum[]
  }

  /**
   * Student.salaryPayments
   */
  export type Student$salaryPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    where?: SalaryPaymentWhereInput
    orderBy?: SalaryPaymentOrderByWithRelationInput | SalaryPaymentOrderByWithRelationInput[]
    cursor?: SalaryPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryPaymentScalarFieldEnum | SalaryPaymentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model AdmissionFee
   */

  export type AggregateAdmissionFee = {
    _count: AdmissionFeeCountAggregateOutputType | null
    _avg: AdmissionFeeAvgAggregateOutputType | null
    _sum: AdmissionFeeSumAggregateOutputType | null
    _min: AdmissionFeeMinAggregateOutputType | null
    _max: AdmissionFeeMaxAggregateOutputType | null
  }

  export type AdmissionFeeAvgAggregateOutputType = {
    amount: number | null
  }

  export type AdmissionFeeSumAggregateOutputType = {
    amount: number | null
  }

  export type AdmissionFeeMinAggregateOutputType = {
    id: string | null
    className: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionFeeMaxAggregateOutputType = {
    id: string | null
    className: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionFeeCountAggregateOutputType = {
    id: number
    className: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmissionFeeAvgAggregateInputType = {
    amount?: true
  }

  export type AdmissionFeeSumAggregateInputType = {
    amount?: true
  }

  export type AdmissionFeeMinAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionFeeMaxAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionFeeCountAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmissionFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionFee to aggregate.
     */
    where?: AdmissionFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionFees to fetch.
     */
    orderBy?: AdmissionFeeOrderByWithRelationInput | AdmissionFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmissionFees
    **/
    _count?: true | AdmissionFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionFeeMaxAggregateInputType
  }

  export type GetAdmissionFeeAggregateType<T extends AdmissionFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissionFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissionFee[P]>
      : GetScalarType<T[P], AggregateAdmissionFee[P]>
  }




  export type AdmissionFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionFeeWhereInput
    orderBy?: AdmissionFeeOrderByWithAggregationInput | AdmissionFeeOrderByWithAggregationInput[]
    by: AdmissionFeeScalarFieldEnum[] | AdmissionFeeScalarFieldEnum
    having?: AdmissionFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionFeeCountAggregateInputType | true
    _avg?: AdmissionFeeAvgAggregateInputType
    _sum?: AdmissionFeeSumAggregateInputType
    _min?: AdmissionFeeMinAggregateInputType
    _max?: AdmissionFeeMaxAggregateInputType
  }

  export type AdmissionFeeGroupByOutputType = {
    id: string
    className: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: AdmissionFeeCountAggregateOutputType | null
    _avg: AdmissionFeeAvgAggregateOutputType | null
    _sum: AdmissionFeeSumAggregateOutputType | null
    _min: AdmissionFeeMinAggregateOutputType | null
    _max: AdmissionFeeMaxAggregateOutputType | null
  }

  type GetAdmissionFeeGroupByPayload<T extends AdmissionFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionFeeGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionFeeGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionFee"]>



  export type AdmissionFeeSelectScalar = {
    id?: boolean
    className?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdmissionFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["admissionFee"]>

  export type $AdmissionFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmissionFee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      className: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admissionFee"]>
    composites: {}
  }

  type AdmissionFeeGetPayload<S extends boolean | null | undefined | AdmissionFeeDefaultArgs> = $Result.GetResult<Prisma.$AdmissionFeePayload, S>

  type AdmissionFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionFeeCountAggregateInputType | true
    }

  export interface AdmissionFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmissionFee'], meta: { name: 'AdmissionFee' } }
    /**
     * Find zero or one AdmissionFee that matches the filter.
     * @param {AdmissionFeeFindUniqueArgs} args - Arguments to find a AdmissionFee
     * @example
     * // Get one AdmissionFee
     * const admissionFee = await prisma.admissionFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionFeeFindUniqueArgs>(args: SelectSubset<T, AdmissionFeeFindUniqueArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmissionFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionFeeFindUniqueOrThrowArgs} args - Arguments to find a AdmissionFee
     * @example
     * // Get one AdmissionFee
     * const admissionFee = await prisma.admissionFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeFindFirstArgs} args - Arguments to find a AdmissionFee
     * @example
     * // Get one AdmissionFee
     * const admissionFee = await prisma.admissionFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionFeeFindFirstArgs>(args?: SelectSubset<T, AdmissionFeeFindFirstArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeFindFirstOrThrowArgs} args - Arguments to find a AdmissionFee
     * @example
     * // Get one AdmissionFee
     * const admissionFee = await prisma.admissionFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmissionFees
     * const admissionFees = await prisma.admissionFee.findMany()
     * 
     * // Get first 10 AdmissionFees
     * const admissionFees = await prisma.admissionFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionFeeWithIdOnly = await prisma.admissionFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionFeeFindManyArgs>(args?: SelectSubset<T, AdmissionFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmissionFee.
     * @param {AdmissionFeeCreateArgs} args - Arguments to create a AdmissionFee.
     * @example
     * // Create one AdmissionFee
     * const AdmissionFee = await prisma.admissionFee.create({
     *   data: {
     *     // ... data to create a AdmissionFee
     *   }
     * })
     * 
     */
    create<T extends AdmissionFeeCreateArgs>(args: SelectSubset<T, AdmissionFeeCreateArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmissionFees.
     * @param {AdmissionFeeCreateManyArgs} args - Arguments to create many AdmissionFees.
     * @example
     * // Create many AdmissionFees
     * const admissionFee = await prisma.admissionFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionFeeCreateManyArgs>(args?: SelectSubset<T, AdmissionFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdmissionFee.
     * @param {AdmissionFeeDeleteArgs} args - Arguments to delete one AdmissionFee.
     * @example
     * // Delete one AdmissionFee
     * const AdmissionFee = await prisma.admissionFee.delete({
     *   where: {
     *     // ... filter to delete one AdmissionFee
     *   }
     * })
     * 
     */
    delete<T extends AdmissionFeeDeleteArgs>(args: SelectSubset<T, AdmissionFeeDeleteArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmissionFee.
     * @param {AdmissionFeeUpdateArgs} args - Arguments to update one AdmissionFee.
     * @example
     * // Update one AdmissionFee
     * const admissionFee = await prisma.admissionFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionFeeUpdateArgs>(args: SelectSubset<T, AdmissionFeeUpdateArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmissionFees.
     * @param {AdmissionFeeDeleteManyArgs} args - Arguments to filter AdmissionFees to delete.
     * @example
     * // Delete a few AdmissionFees
     * const { count } = await prisma.admissionFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionFeeDeleteManyArgs>(args?: SelectSubset<T, AdmissionFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmissionFees
     * const admissionFee = await prisma.admissionFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionFeeUpdateManyArgs>(args: SelectSubset<T, AdmissionFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdmissionFee.
     * @param {AdmissionFeeUpsertArgs} args - Arguments to update or create a AdmissionFee.
     * @example
     * // Update or create a AdmissionFee
     * const admissionFee = await prisma.admissionFee.upsert({
     *   create: {
     *     // ... data to create a AdmissionFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmissionFee we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionFeeUpsertArgs>(args: SelectSubset<T, AdmissionFeeUpsertArgs<ExtArgs>>): Prisma__AdmissionFeeClient<$Result.GetResult<Prisma.$AdmissionFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionFees that matches the filter.
     * @param {AdmissionFeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admissionFee = await prisma.admissionFee.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdmissionFeeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AdmissionFee.
     * @param {AdmissionFeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admissionFee = await prisma.admissionFee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdmissionFeeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AdmissionFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeCountArgs} args - Arguments to filter AdmissionFees to count.
     * @example
     * // Count the number of AdmissionFees
     * const count = await prisma.admissionFee.count({
     *   where: {
     *     // ... the filter for the AdmissionFees we want to count
     *   }
     * })
    **/
    count<T extends AdmissionFeeCountArgs>(
      args?: Subset<T, AdmissionFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmissionFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionFeeAggregateArgs>(args: Subset<T, AdmissionFeeAggregateArgs>): Prisma.PrismaPromise<GetAdmissionFeeAggregateType<T>>

    /**
     * Group by AdmissionFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionFeeGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmissionFee model
   */
  readonly fields: AdmissionFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmissionFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdmissionFee model
   */
  interface AdmissionFeeFieldRefs {
    readonly id: FieldRef<"AdmissionFee", 'String'>
    readonly className: FieldRef<"AdmissionFee", 'String'>
    readonly amount: FieldRef<"AdmissionFee", 'Int'>
    readonly createdAt: FieldRef<"AdmissionFee", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmissionFee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmissionFee findUnique
   */
  export type AdmissionFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionFee to fetch.
     */
    where: AdmissionFeeWhereUniqueInput
  }

  /**
   * AdmissionFee findUniqueOrThrow
   */
  export type AdmissionFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionFee to fetch.
     */
    where: AdmissionFeeWhereUniqueInput
  }

  /**
   * AdmissionFee findFirst
   */
  export type AdmissionFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionFee to fetch.
     */
    where?: AdmissionFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionFees to fetch.
     */
    orderBy?: AdmissionFeeOrderByWithRelationInput | AdmissionFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionFees.
     */
    cursor?: AdmissionFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionFees.
     */
    distinct?: AdmissionFeeScalarFieldEnum | AdmissionFeeScalarFieldEnum[]
  }

  /**
   * AdmissionFee findFirstOrThrow
   */
  export type AdmissionFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionFee to fetch.
     */
    where?: AdmissionFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionFees to fetch.
     */
    orderBy?: AdmissionFeeOrderByWithRelationInput | AdmissionFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionFees.
     */
    cursor?: AdmissionFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionFees.
     */
    distinct?: AdmissionFeeScalarFieldEnum | AdmissionFeeScalarFieldEnum[]
  }

  /**
   * AdmissionFee findMany
   */
  export type AdmissionFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionFees to fetch.
     */
    where?: AdmissionFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionFees to fetch.
     */
    orderBy?: AdmissionFeeOrderByWithRelationInput | AdmissionFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmissionFees.
     */
    cursor?: AdmissionFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionFees.
     */
    skip?: number
    distinct?: AdmissionFeeScalarFieldEnum | AdmissionFeeScalarFieldEnum[]
  }

  /**
   * AdmissionFee create
   */
  export type AdmissionFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * The data needed to create a AdmissionFee.
     */
    data: XOR<AdmissionFeeCreateInput, AdmissionFeeUncheckedCreateInput>
  }

  /**
   * AdmissionFee createMany
   */
  export type AdmissionFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmissionFees.
     */
    data: AdmissionFeeCreateManyInput | AdmissionFeeCreateManyInput[]
  }

  /**
   * AdmissionFee update
   */
  export type AdmissionFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * The data needed to update a AdmissionFee.
     */
    data: XOR<AdmissionFeeUpdateInput, AdmissionFeeUncheckedUpdateInput>
    /**
     * Choose, which AdmissionFee to update.
     */
    where: AdmissionFeeWhereUniqueInput
  }

  /**
   * AdmissionFee updateMany
   */
  export type AdmissionFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmissionFees.
     */
    data: XOR<AdmissionFeeUpdateManyMutationInput, AdmissionFeeUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionFees to update
     */
    where?: AdmissionFeeWhereInput
    /**
     * Limit how many AdmissionFees to update.
     */
    limit?: number
  }

  /**
   * AdmissionFee upsert
   */
  export type AdmissionFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * The filter to search for the AdmissionFee to update in case it exists.
     */
    where: AdmissionFeeWhereUniqueInput
    /**
     * In case the AdmissionFee found by the `where` argument doesn't exist, create a new AdmissionFee with this data.
     */
    create: XOR<AdmissionFeeCreateInput, AdmissionFeeUncheckedCreateInput>
    /**
     * In case the AdmissionFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionFeeUpdateInput, AdmissionFeeUncheckedUpdateInput>
  }

  /**
   * AdmissionFee delete
   */
  export type AdmissionFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
    /**
     * Filter which AdmissionFee to delete.
     */
    where: AdmissionFeeWhereUniqueInput
  }

  /**
   * AdmissionFee deleteMany
   */
  export type AdmissionFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionFees to delete
     */
    where?: AdmissionFeeWhereInput
    /**
     * Limit how many AdmissionFees to delete.
     */
    limit?: number
  }

  /**
   * AdmissionFee findRaw
   */
  export type AdmissionFeeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdmissionFee aggregateRaw
   */
  export type AdmissionFeeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdmissionFee without action
   */
  export type AdmissionFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionFee
     */
    select?: AdmissionFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionFee
     */
    omit?: AdmissionFeeOmit<ExtArgs> | null
  }


  /**
   * Model SalaryFee
   */

  export type AggregateSalaryFee = {
    _count: SalaryFeeCountAggregateOutputType | null
    _avg: SalaryFeeAvgAggregateOutputType | null
    _sum: SalaryFeeSumAggregateOutputType | null
    _min: SalaryFeeMinAggregateOutputType | null
    _max: SalaryFeeMaxAggregateOutputType | null
  }

  export type SalaryFeeAvgAggregateOutputType = {
    amount: number | null
  }

  export type SalaryFeeSumAggregateOutputType = {
    amount: number | null
  }

  export type SalaryFeeMinAggregateOutputType = {
    id: string | null
    className: string | null
    group: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryFeeMaxAggregateOutputType = {
    id: string | null
    className: string | null
    group: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryFeeCountAggregateOutputType = {
    id: number
    className: number
    group: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaryFeeAvgAggregateInputType = {
    amount?: true
  }

  export type SalaryFeeSumAggregateInputType = {
    amount?: true
  }

  export type SalaryFeeMinAggregateInputType = {
    id?: true
    className?: true
    group?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryFeeMaxAggregateInputType = {
    id?: true
    className?: true
    group?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryFeeCountAggregateInputType = {
    id?: true
    className?: true
    group?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaryFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryFee to aggregate.
     */
    where?: SalaryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFees to fetch.
     */
    orderBy?: SalaryFeeOrderByWithRelationInput | SalaryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryFees
    **/
    _count?: true | SalaryFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryFeeMaxAggregateInputType
  }

  export type GetSalaryFeeAggregateType<T extends SalaryFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryFee[P]>
      : GetScalarType<T[P], AggregateSalaryFee[P]>
  }




  export type SalaryFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryFeeWhereInput
    orderBy?: SalaryFeeOrderByWithAggregationInput | SalaryFeeOrderByWithAggregationInput[]
    by: SalaryFeeScalarFieldEnum[] | SalaryFeeScalarFieldEnum
    having?: SalaryFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryFeeCountAggregateInputType | true
    _avg?: SalaryFeeAvgAggregateInputType
    _sum?: SalaryFeeSumAggregateInputType
    _min?: SalaryFeeMinAggregateInputType
    _max?: SalaryFeeMaxAggregateInputType
  }

  export type SalaryFeeGroupByOutputType = {
    id: string
    className: string
    group: string | null
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: SalaryFeeCountAggregateOutputType | null
    _avg: SalaryFeeAvgAggregateOutputType | null
    _sum: SalaryFeeSumAggregateOutputType | null
    _min: SalaryFeeMinAggregateOutputType | null
    _max: SalaryFeeMaxAggregateOutputType | null
  }

  type GetSalaryFeeGroupByPayload<T extends SalaryFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryFeeGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryFeeGroupByOutputType[P]>
        }
      >
    >


  export type SalaryFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    group?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salaryFee"]>



  export type SalaryFeeSelectScalar = {
    id?: boolean
    className?: boolean
    group?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaryFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "group" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["salaryFee"]>

  export type $SalaryFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryFee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      className: string
      group: string | null
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salaryFee"]>
    composites: {}
  }

  type SalaryFeeGetPayload<S extends boolean | null | undefined | SalaryFeeDefaultArgs> = $Result.GetResult<Prisma.$SalaryFeePayload, S>

  type SalaryFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryFeeCountAggregateInputType | true
    }

  export interface SalaryFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryFee'], meta: { name: 'SalaryFee' } }
    /**
     * Find zero or one SalaryFee that matches the filter.
     * @param {SalaryFeeFindUniqueArgs} args - Arguments to find a SalaryFee
     * @example
     * // Get one SalaryFee
     * const salaryFee = await prisma.salaryFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryFeeFindUniqueArgs>(args: SelectSubset<T, SalaryFeeFindUniqueArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalaryFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryFeeFindUniqueOrThrowArgs} args - Arguments to find a SalaryFee
     * @example
     * // Get one SalaryFee
     * const salaryFee = await prisma.salaryFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeFindFirstArgs} args - Arguments to find a SalaryFee
     * @example
     * // Get one SalaryFee
     * const salaryFee = await prisma.salaryFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryFeeFindFirstArgs>(args?: SelectSubset<T, SalaryFeeFindFirstArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeFindFirstOrThrowArgs} args - Arguments to find a SalaryFee
     * @example
     * // Get one SalaryFee
     * const salaryFee = await prisma.salaryFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryFees
     * const salaryFees = await prisma.salaryFee.findMany()
     * 
     * // Get first 10 SalaryFees
     * const salaryFees = await prisma.salaryFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryFeeWithIdOnly = await prisma.salaryFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryFeeFindManyArgs>(args?: SelectSubset<T, SalaryFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalaryFee.
     * @param {SalaryFeeCreateArgs} args - Arguments to create a SalaryFee.
     * @example
     * // Create one SalaryFee
     * const SalaryFee = await prisma.salaryFee.create({
     *   data: {
     *     // ... data to create a SalaryFee
     *   }
     * })
     * 
     */
    create<T extends SalaryFeeCreateArgs>(args: SelectSubset<T, SalaryFeeCreateArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalaryFees.
     * @param {SalaryFeeCreateManyArgs} args - Arguments to create many SalaryFees.
     * @example
     * // Create many SalaryFees
     * const salaryFee = await prisma.salaryFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryFeeCreateManyArgs>(args?: SelectSubset<T, SalaryFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalaryFee.
     * @param {SalaryFeeDeleteArgs} args - Arguments to delete one SalaryFee.
     * @example
     * // Delete one SalaryFee
     * const SalaryFee = await prisma.salaryFee.delete({
     *   where: {
     *     // ... filter to delete one SalaryFee
     *   }
     * })
     * 
     */
    delete<T extends SalaryFeeDeleteArgs>(args: SelectSubset<T, SalaryFeeDeleteArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalaryFee.
     * @param {SalaryFeeUpdateArgs} args - Arguments to update one SalaryFee.
     * @example
     * // Update one SalaryFee
     * const salaryFee = await prisma.salaryFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryFeeUpdateArgs>(args: SelectSubset<T, SalaryFeeUpdateArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalaryFees.
     * @param {SalaryFeeDeleteManyArgs} args - Arguments to filter SalaryFees to delete.
     * @example
     * // Delete a few SalaryFees
     * const { count } = await prisma.salaryFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryFeeDeleteManyArgs>(args?: SelectSubset<T, SalaryFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryFees
     * const salaryFee = await prisma.salaryFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryFeeUpdateManyArgs>(args: SelectSubset<T, SalaryFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalaryFee.
     * @param {SalaryFeeUpsertArgs} args - Arguments to update or create a SalaryFee.
     * @example
     * // Update or create a SalaryFee
     * const salaryFee = await prisma.salaryFee.upsert({
     *   create: {
     *     // ... data to create a SalaryFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryFee we want to update
     *   }
     * })
     */
    upsert<T extends SalaryFeeUpsertArgs>(args: SelectSubset<T, SalaryFeeUpsertArgs<ExtArgs>>): Prisma__SalaryFeeClient<$Result.GetResult<Prisma.$SalaryFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryFees that matches the filter.
     * @param {SalaryFeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const salaryFee = await prisma.salaryFee.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SalaryFeeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SalaryFee.
     * @param {SalaryFeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const salaryFee = await prisma.salaryFee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SalaryFeeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SalaryFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeCountArgs} args - Arguments to filter SalaryFees to count.
     * @example
     * // Count the number of SalaryFees
     * const count = await prisma.salaryFee.count({
     *   where: {
     *     // ... the filter for the SalaryFees we want to count
     *   }
     * })
    **/
    count<T extends SalaryFeeCountArgs>(
      args?: Subset<T, SalaryFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaryFeeAggregateArgs>(args: Subset<T, SalaryFeeAggregateArgs>): Prisma.PrismaPromise<GetSalaryFeeAggregateType<T>>

    /**
     * Group by SalaryFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaryFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryFeeGroupByArgs['orderBy'] }
        : { orderBy?: SalaryFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaryFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryFee model
   */
  readonly fields: SalaryFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalaryFee model
   */
  interface SalaryFeeFieldRefs {
    readonly id: FieldRef<"SalaryFee", 'String'>
    readonly className: FieldRef<"SalaryFee", 'String'>
    readonly group: FieldRef<"SalaryFee", 'String'>
    readonly amount: FieldRef<"SalaryFee", 'Int'>
    readonly createdAt: FieldRef<"SalaryFee", 'DateTime'>
    readonly updatedAt: FieldRef<"SalaryFee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryFee findUnique
   */
  export type SalaryFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter, which SalaryFee to fetch.
     */
    where: SalaryFeeWhereUniqueInput
  }

  /**
   * SalaryFee findUniqueOrThrow
   */
  export type SalaryFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter, which SalaryFee to fetch.
     */
    where: SalaryFeeWhereUniqueInput
  }

  /**
   * SalaryFee findFirst
   */
  export type SalaryFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter, which SalaryFee to fetch.
     */
    where?: SalaryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFees to fetch.
     */
    orderBy?: SalaryFeeOrderByWithRelationInput | SalaryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryFees.
     */
    cursor?: SalaryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryFees.
     */
    distinct?: SalaryFeeScalarFieldEnum | SalaryFeeScalarFieldEnum[]
  }

  /**
   * SalaryFee findFirstOrThrow
   */
  export type SalaryFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter, which SalaryFee to fetch.
     */
    where?: SalaryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFees to fetch.
     */
    orderBy?: SalaryFeeOrderByWithRelationInput | SalaryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryFees.
     */
    cursor?: SalaryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryFees.
     */
    distinct?: SalaryFeeScalarFieldEnum | SalaryFeeScalarFieldEnum[]
  }

  /**
   * SalaryFee findMany
   */
  export type SalaryFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter, which SalaryFees to fetch.
     */
    where?: SalaryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFees to fetch.
     */
    orderBy?: SalaryFeeOrderByWithRelationInput | SalaryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryFees.
     */
    cursor?: SalaryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFees.
     */
    skip?: number
    distinct?: SalaryFeeScalarFieldEnum | SalaryFeeScalarFieldEnum[]
  }

  /**
   * SalaryFee create
   */
  export type SalaryFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * The data needed to create a SalaryFee.
     */
    data: XOR<SalaryFeeCreateInput, SalaryFeeUncheckedCreateInput>
  }

  /**
   * SalaryFee createMany
   */
  export type SalaryFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryFees.
     */
    data: SalaryFeeCreateManyInput | SalaryFeeCreateManyInput[]
  }

  /**
   * SalaryFee update
   */
  export type SalaryFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * The data needed to update a SalaryFee.
     */
    data: XOR<SalaryFeeUpdateInput, SalaryFeeUncheckedUpdateInput>
    /**
     * Choose, which SalaryFee to update.
     */
    where: SalaryFeeWhereUniqueInput
  }

  /**
   * SalaryFee updateMany
   */
  export type SalaryFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryFees.
     */
    data: XOR<SalaryFeeUpdateManyMutationInput, SalaryFeeUncheckedUpdateManyInput>
    /**
     * Filter which SalaryFees to update
     */
    where?: SalaryFeeWhereInput
    /**
     * Limit how many SalaryFees to update.
     */
    limit?: number
  }

  /**
   * SalaryFee upsert
   */
  export type SalaryFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * The filter to search for the SalaryFee to update in case it exists.
     */
    where: SalaryFeeWhereUniqueInput
    /**
     * In case the SalaryFee found by the `where` argument doesn't exist, create a new SalaryFee with this data.
     */
    create: XOR<SalaryFeeCreateInput, SalaryFeeUncheckedCreateInput>
    /**
     * In case the SalaryFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryFeeUpdateInput, SalaryFeeUncheckedUpdateInput>
  }

  /**
   * SalaryFee delete
   */
  export type SalaryFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
    /**
     * Filter which SalaryFee to delete.
     */
    where: SalaryFeeWhereUniqueInput
  }

  /**
   * SalaryFee deleteMany
   */
  export type SalaryFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryFees to delete
     */
    where?: SalaryFeeWhereInput
    /**
     * Limit how many SalaryFees to delete.
     */
    limit?: number
  }

  /**
   * SalaryFee findRaw
   */
  export type SalaryFeeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalaryFee aggregateRaw
   */
  export type SalaryFeeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalaryFee without action
   */
  export type SalaryFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFee
     */
    select?: SalaryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryFee
     */
    omit?: SalaryFeeOmit<ExtArgs> | null
  }


  /**
   * Model AdmissionPayment
   */

  export type AggregateAdmissionPayment = {
    _count: AdmissionPaymentCountAggregateOutputType | null
    _avg: AdmissionPaymentAvgAggregateOutputType | null
    _sum: AdmissionPaymentSumAggregateOutputType | null
    _min: AdmissionPaymentMinAggregateOutputType | null
    _max: AdmissionPaymentMaxAggregateOutputType | null
  }

  export type AdmissionPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type AdmissionPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type AdmissionPaymentMinAggregateOutputType = {
    id: string | null
    className: string | null
    amount: number | null
    method: string | null
    status: string | null
    paymentStatus: string | null
    session: string | null
    month: string | null
    paidAt: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionPaymentMaxAggregateOutputType = {
    id: string | null
    className: string | null
    amount: number | null
    method: string | null
    status: string | null
    paymentStatus: string | null
    session: string | null
    month: string | null
    paidAt: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionPaymentCountAggregateOutputType = {
    id: number
    className: number
    amount: number
    method: number
    status: number
    paymentStatus: number
    session: number
    month: number
    paidAt: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmissionPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type AdmissionPaymentSumAggregateInputType = {
    amount?: true
  }

  export type AdmissionPaymentMinAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    method?: true
    status?: true
    paymentStatus?: true
    session?: true
    month?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionPaymentMaxAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    method?: true
    status?: true
    paymentStatus?: true
    session?: true
    month?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionPaymentCountAggregateInputType = {
    id?: true
    className?: true
    amount?: true
    method?: true
    status?: true
    paymentStatus?: true
    session?: true
    month?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmissionPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionPayment to aggregate.
     */
    where?: AdmissionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionPayments to fetch.
     */
    orderBy?: AdmissionPaymentOrderByWithRelationInput | AdmissionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmissionPayments
    **/
    _count?: true | AdmissionPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionPaymentMaxAggregateInputType
  }

  export type GetAdmissionPaymentAggregateType<T extends AdmissionPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissionPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissionPayment[P]>
      : GetScalarType<T[P], AggregateAdmissionPayment[P]>
  }




  export type AdmissionPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionPaymentWhereInput
    orderBy?: AdmissionPaymentOrderByWithAggregationInput | AdmissionPaymentOrderByWithAggregationInput[]
    by: AdmissionPaymentScalarFieldEnum[] | AdmissionPaymentScalarFieldEnum
    having?: AdmissionPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionPaymentCountAggregateInputType | true
    _avg?: AdmissionPaymentAvgAggregateInputType
    _sum?: AdmissionPaymentSumAggregateInputType
    _min?: AdmissionPaymentMinAggregateInputType
    _max?: AdmissionPaymentMaxAggregateInputType
  }

  export type AdmissionPaymentGroupByOutputType = {
    id: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus: string
    session: string
    month: string
    paidAt: Date | null
    studentId: string
    createdAt: Date
    updatedAt: Date
    _count: AdmissionPaymentCountAggregateOutputType | null
    _avg: AdmissionPaymentAvgAggregateOutputType | null
    _sum: AdmissionPaymentSumAggregateOutputType | null
    _min: AdmissionPaymentMinAggregateOutputType | null
    _max: AdmissionPaymentMaxAggregateOutputType | null
  }

  type GetAdmissionPaymentGroupByPayload<T extends AdmissionPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionPaymentGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paymentStatus?: boolean
    session?: boolean
    month?: boolean
    paidAt?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admissionPayment"]>



  export type AdmissionPaymentSelectScalar = {
    id?: boolean
    className?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paymentStatus?: boolean
    session?: boolean
    month?: boolean
    paidAt?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdmissionPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "amount" | "method" | "status" | "paymentStatus" | "session" | "month" | "paidAt" | "studentId" | "createdAt" | "updatedAt", ExtArgs["result"]["admissionPayment"]>
  export type AdmissionPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AdmissionPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmissionPayment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      className: string
      amount: number
      method: string
      status: string
      paymentStatus: string
      session: string
      month: string
      paidAt: Date | null
      studentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admissionPayment"]>
    composites: {}
  }

  type AdmissionPaymentGetPayload<S extends boolean | null | undefined | AdmissionPaymentDefaultArgs> = $Result.GetResult<Prisma.$AdmissionPaymentPayload, S>

  type AdmissionPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionPaymentCountAggregateInputType | true
    }

  export interface AdmissionPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmissionPayment'], meta: { name: 'AdmissionPayment' } }
    /**
     * Find zero or one AdmissionPayment that matches the filter.
     * @param {AdmissionPaymentFindUniqueArgs} args - Arguments to find a AdmissionPayment
     * @example
     * // Get one AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionPaymentFindUniqueArgs>(args: SelectSubset<T, AdmissionPaymentFindUniqueArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmissionPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionPaymentFindUniqueOrThrowArgs} args - Arguments to find a AdmissionPayment
     * @example
     * // Get one AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentFindFirstArgs} args - Arguments to find a AdmissionPayment
     * @example
     * // Get one AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionPaymentFindFirstArgs>(args?: SelectSubset<T, AdmissionPaymentFindFirstArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentFindFirstOrThrowArgs} args - Arguments to find a AdmissionPayment
     * @example
     * // Get one AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmissionPayments
     * const admissionPayments = await prisma.admissionPayment.findMany()
     * 
     * // Get first 10 AdmissionPayments
     * const admissionPayments = await prisma.admissionPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionPaymentWithIdOnly = await prisma.admissionPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionPaymentFindManyArgs>(args?: SelectSubset<T, AdmissionPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmissionPayment.
     * @param {AdmissionPaymentCreateArgs} args - Arguments to create a AdmissionPayment.
     * @example
     * // Create one AdmissionPayment
     * const AdmissionPayment = await prisma.admissionPayment.create({
     *   data: {
     *     // ... data to create a AdmissionPayment
     *   }
     * })
     * 
     */
    create<T extends AdmissionPaymentCreateArgs>(args: SelectSubset<T, AdmissionPaymentCreateArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmissionPayments.
     * @param {AdmissionPaymentCreateManyArgs} args - Arguments to create many AdmissionPayments.
     * @example
     * // Create many AdmissionPayments
     * const admissionPayment = await prisma.admissionPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionPaymentCreateManyArgs>(args?: SelectSubset<T, AdmissionPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdmissionPayment.
     * @param {AdmissionPaymentDeleteArgs} args - Arguments to delete one AdmissionPayment.
     * @example
     * // Delete one AdmissionPayment
     * const AdmissionPayment = await prisma.admissionPayment.delete({
     *   where: {
     *     // ... filter to delete one AdmissionPayment
     *   }
     * })
     * 
     */
    delete<T extends AdmissionPaymentDeleteArgs>(args: SelectSubset<T, AdmissionPaymentDeleteArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmissionPayment.
     * @param {AdmissionPaymentUpdateArgs} args - Arguments to update one AdmissionPayment.
     * @example
     * // Update one AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionPaymentUpdateArgs>(args: SelectSubset<T, AdmissionPaymentUpdateArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmissionPayments.
     * @param {AdmissionPaymentDeleteManyArgs} args - Arguments to filter AdmissionPayments to delete.
     * @example
     * // Delete a few AdmissionPayments
     * const { count } = await prisma.admissionPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionPaymentDeleteManyArgs>(args?: SelectSubset<T, AdmissionPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmissionPayments
     * const admissionPayment = await prisma.admissionPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionPaymentUpdateManyArgs>(args: SelectSubset<T, AdmissionPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdmissionPayment.
     * @param {AdmissionPaymentUpsertArgs} args - Arguments to update or create a AdmissionPayment.
     * @example
     * // Update or create a AdmissionPayment
     * const admissionPayment = await prisma.admissionPayment.upsert({
     *   create: {
     *     // ... data to create a AdmissionPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmissionPayment we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionPaymentUpsertArgs>(args: SelectSubset<T, AdmissionPaymentUpsertArgs<ExtArgs>>): Prisma__AdmissionPaymentClient<$Result.GetResult<Prisma.$AdmissionPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionPayments that matches the filter.
     * @param {AdmissionPaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admissionPayment = await prisma.admissionPayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdmissionPaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AdmissionPayment.
     * @param {AdmissionPaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admissionPayment = await prisma.admissionPayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdmissionPaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AdmissionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentCountArgs} args - Arguments to filter AdmissionPayments to count.
     * @example
     * // Count the number of AdmissionPayments
     * const count = await prisma.admissionPayment.count({
     *   where: {
     *     // ... the filter for the AdmissionPayments we want to count
     *   }
     * })
    **/
    count<T extends AdmissionPaymentCountArgs>(
      args?: Subset<T, AdmissionPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmissionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionPaymentAggregateArgs>(args: Subset<T, AdmissionPaymentAggregateArgs>): Prisma.PrismaPromise<GetAdmissionPaymentAggregateType<T>>

    /**
     * Group by AdmissionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionPaymentGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmissionPayment model
   */
  readonly fields: AdmissionPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmissionPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdmissionPayment model
   */
  interface AdmissionPaymentFieldRefs {
    readonly id: FieldRef<"AdmissionPayment", 'String'>
    readonly className: FieldRef<"AdmissionPayment", 'String'>
    readonly amount: FieldRef<"AdmissionPayment", 'Int'>
    readonly method: FieldRef<"AdmissionPayment", 'String'>
    readonly status: FieldRef<"AdmissionPayment", 'String'>
    readonly paymentStatus: FieldRef<"AdmissionPayment", 'String'>
    readonly session: FieldRef<"AdmissionPayment", 'String'>
    readonly month: FieldRef<"AdmissionPayment", 'String'>
    readonly paidAt: FieldRef<"AdmissionPayment", 'DateTime'>
    readonly studentId: FieldRef<"AdmissionPayment", 'String'>
    readonly createdAt: FieldRef<"AdmissionPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmissionPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmissionPayment findUnique
   */
  export type AdmissionPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionPayment to fetch.
     */
    where: AdmissionPaymentWhereUniqueInput
  }

  /**
   * AdmissionPayment findUniqueOrThrow
   */
  export type AdmissionPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionPayment to fetch.
     */
    where: AdmissionPaymentWhereUniqueInput
  }

  /**
   * AdmissionPayment findFirst
   */
  export type AdmissionPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionPayment to fetch.
     */
    where?: AdmissionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionPayments to fetch.
     */
    orderBy?: AdmissionPaymentOrderByWithRelationInput | AdmissionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionPayments.
     */
    cursor?: AdmissionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionPayments.
     */
    distinct?: AdmissionPaymentScalarFieldEnum | AdmissionPaymentScalarFieldEnum[]
  }

  /**
   * AdmissionPayment findFirstOrThrow
   */
  export type AdmissionPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionPayment to fetch.
     */
    where?: AdmissionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionPayments to fetch.
     */
    orderBy?: AdmissionPaymentOrderByWithRelationInput | AdmissionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionPayments.
     */
    cursor?: AdmissionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionPayments.
     */
    distinct?: AdmissionPaymentScalarFieldEnum | AdmissionPaymentScalarFieldEnum[]
  }

  /**
   * AdmissionPayment findMany
   */
  export type AdmissionPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionPayments to fetch.
     */
    where?: AdmissionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionPayments to fetch.
     */
    orderBy?: AdmissionPaymentOrderByWithRelationInput | AdmissionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmissionPayments.
     */
    cursor?: AdmissionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionPayments.
     */
    skip?: number
    distinct?: AdmissionPaymentScalarFieldEnum | AdmissionPaymentScalarFieldEnum[]
  }

  /**
   * AdmissionPayment create
   */
  export type AdmissionPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a AdmissionPayment.
     */
    data: XOR<AdmissionPaymentCreateInput, AdmissionPaymentUncheckedCreateInput>
  }

  /**
   * AdmissionPayment createMany
   */
  export type AdmissionPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmissionPayments.
     */
    data: AdmissionPaymentCreateManyInput | AdmissionPaymentCreateManyInput[]
  }

  /**
   * AdmissionPayment update
   */
  export type AdmissionPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a AdmissionPayment.
     */
    data: XOR<AdmissionPaymentUpdateInput, AdmissionPaymentUncheckedUpdateInput>
    /**
     * Choose, which AdmissionPayment to update.
     */
    where: AdmissionPaymentWhereUniqueInput
  }

  /**
   * AdmissionPayment updateMany
   */
  export type AdmissionPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmissionPayments.
     */
    data: XOR<AdmissionPaymentUpdateManyMutationInput, AdmissionPaymentUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionPayments to update
     */
    where?: AdmissionPaymentWhereInput
    /**
     * Limit how many AdmissionPayments to update.
     */
    limit?: number
  }

  /**
   * AdmissionPayment upsert
   */
  export type AdmissionPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the AdmissionPayment to update in case it exists.
     */
    where: AdmissionPaymentWhereUniqueInput
    /**
     * In case the AdmissionPayment found by the `where` argument doesn't exist, create a new AdmissionPayment with this data.
     */
    create: XOR<AdmissionPaymentCreateInput, AdmissionPaymentUncheckedCreateInput>
    /**
     * In case the AdmissionPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionPaymentUpdateInput, AdmissionPaymentUncheckedUpdateInput>
  }

  /**
   * AdmissionPayment delete
   */
  export type AdmissionPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
    /**
     * Filter which AdmissionPayment to delete.
     */
    where: AdmissionPaymentWhereUniqueInput
  }

  /**
   * AdmissionPayment deleteMany
   */
  export type AdmissionPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionPayments to delete
     */
    where?: AdmissionPaymentWhereInput
    /**
     * Limit how many AdmissionPayments to delete.
     */
    limit?: number
  }

  /**
   * AdmissionPayment findRaw
   */
  export type AdmissionPaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdmissionPayment aggregateRaw
   */
  export type AdmissionPaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdmissionPayment without action
   */
  export type AdmissionPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionPayment
     */
    select?: AdmissionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionPayment
     */
    omit?: AdmissionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionPaymentInclude<ExtArgs> | null
  }


  /**
   * Model SalaryPayment
   */

  export type AggregateSalaryPayment = {
    _count: SalaryPaymentCountAggregateOutputType | null
    _avg: SalaryPaymentAvgAggregateOutputType | null
    _sum: SalaryPaymentSumAggregateOutputType | null
    _min: SalaryPaymentMinAggregateOutputType | null
    _max: SalaryPaymentMaxAggregateOutputType | null
  }

  export type SalaryPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type SalaryPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type SalaryPaymentMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    amount: number | null
    session: string | null
    month: string | null
    className: string | null
    method: string | null
    status: string | null
    paymentStatus: string | null
    note: string | null
    paidAt: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryPaymentMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    amount: number | null
    session: string | null
    month: string | null
    className: string | null
    method: string | null
    status: string | null
    paymentStatus: string | null
    note: string | null
    paidAt: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryPaymentCountAggregateOutputType = {
    id: number
    transactionId: number
    amount: number
    session: number
    month: number
    className: number
    method: number
    status: number
    paymentStatus: number
    note: number
    paidAt: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaryPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type SalaryPaymentSumAggregateInputType = {
    amount?: true
  }

  export type SalaryPaymentMinAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    session?: true
    month?: true
    className?: true
    method?: true
    status?: true
    paymentStatus?: true
    note?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryPaymentMaxAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    session?: true
    month?: true
    className?: true
    method?: true
    status?: true
    paymentStatus?: true
    note?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryPaymentCountAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    session?: true
    month?: true
    className?: true
    method?: true
    status?: true
    paymentStatus?: true
    note?: true
    paidAt?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaryPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryPayment to aggregate.
     */
    where?: SalaryPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryPayments to fetch.
     */
    orderBy?: SalaryPaymentOrderByWithRelationInput | SalaryPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryPayments
    **/
    _count?: true | SalaryPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryPaymentMaxAggregateInputType
  }

  export type GetSalaryPaymentAggregateType<T extends SalaryPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryPayment[P]>
      : GetScalarType<T[P], AggregateSalaryPayment[P]>
  }




  export type SalaryPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryPaymentWhereInput
    orderBy?: SalaryPaymentOrderByWithAggregationInput | SalaryPaymentOrderByWithAggregationInput[]
    by: SalaryPaymentScalarFieldEnum[] | SalaryPaymentScalarFieldEnum
    having?: SalaryPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryPaymentCountAggregateInputType | true
    _avg?: SalaryPaymentAvgAggregateInputType
    _sum?: SalaryPaymentSumAggregateInputType
    _min?: SalaryPaymentMinAggregateInputType
    _max?: SalaryPaymentMaxAggregateInputType
  }

  export type SalaryPaymentGroupByOutputType = {
    id: string
    transactionId: string | null
    amount: number
    session: string
    month: string
    className: string
    method: string | null
    status: string
    paymentStatus: string
    note: string | null
    paidAt: Date | null
    studentId: string
    createdAt: Date
    updatedAt: Date
    _count: SalaryPaymentCountAggregateOutputType | null
    _avg: SalaryPaymentAvgAggregateOutputType | null
    _sum: SalaryPaymentSumAggregateOutputType | null
    _min: SalaryPaymentMinAggregateOutputType | null
    _max: SalaryPaymentMaxAggregateOutputType | null
  }

  type GetSalaryPaymentGroupByPayload<T extends SalaryPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryPaymentGroupByOutputType[P]>
        }
      >
    >


  export type SalaryPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    amount?: boolean
    session?: boolean
    month?: boolean
    className?: boolean
    method?: boolean
    status?: boolean
    paymentStatus?: boolean
    note?: boolean
    paidAt?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryPayment"]>



  export type SalaryPaymentSelectScalar = {
    id?: boolean
    transactionId?: boolean
    amount?: boolean
    session?: boolean
    month?: boolean
    className?: boolean
    method?: boolean
    status?: boolean
    paymentStatus?: boolean
    note?: boolean
    paidAt?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaryPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "amount" | "session" | "month" | "className" | "method" | "status" | "paymentStatus" | "note" | "paidAt" | "studentId" | "createdAt" | "updatedAt", ExtArgs["result"]["salaryPayment"]>
  export type SalaryPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SalaryPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryPayment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string | null
      amount: number
      session: string
      month: string
      className: string
      method: string | null
      status: string
      paymentStatus: string
      note: string | null
      paidAt: Date | null
      studentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salaryPayment"]>
    composites: {}
  }

  type SalaryPaymentGetPayload<S extends boolean | null | undefined | SalaryPaymentDefaultArgs> = $Result.GetResult<Prisma.$SalaryPaymentPayload, S>

  type SalaryPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryPaymentCountAggregateInputType | true
    }

  export interface SalaryPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryPayment'], meta: { name: 'SalaryPayment' } }
    /**
     * Find zero or one SalaryPayment that matches the filter.
     * @param {SalaryPaymentFindUniqueArgs} args - Arguments to find a SalaryPayment
     * @example
     * // Get one SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryPaymentFindUniqueArgs>(args: SelectSubset<T, SalaryPaymentFindUniqueArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalaryPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryPaymentFindUniqueOrThrowArgs} args - Arguments to find a SalaryPayment
     * @example
     * // Get one SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentFindFirstArgs} args - Arguments to find a SalaryPayment
     * @example
     * // Get one SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryPaymentFindFirstArgs>(args?: SelectSubset<T, SalaryPaymentFindFirstArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentFindFirstOrThrowArgs} args - Arguments to find a SalaryPayment
     * @example
     * // Get one SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryPayments
     * const salaryPayments = await prisma.salaryPayment.findMany()
     * 
     * // Get first 10 SalaryPayments
     * const salaryPayments = await prisma.salaryPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryPaymentWithIdOnly = await prisma.salaryPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryPaymentFindManyArgs>(args?: SelectSubset<T, SalaryPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalaryPayment.
     * @param {SalaryPaymentCreateArgs} args - Arguments to create a SalaryPayment.
     * @example
     * // Create one SalaryPayment
     * const SalaryPayment = await prisma.salaryPayment.create({
     *   data: {
     *     // ... data to create a SalaryPayment
     *   }
     * })
     * 
     */
    create<T extends SalaryPaymentCreateArgs>(args: SelectSubset<T, SalaryPaymentCreateArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalaryPayments.
     * @param {SalaryPaymentCreateManyArgs} args - Arguments to create many SalaryPayments.
     * @example
     * // Create many SalaryPayments
     * const salaryPayment = await prisma.salaryPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryPaymentCreateManyArgs>(args?: SelectSubset<T, SalaryPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalaryPayment.
     * @param {SalaryPaymentDeleteArgs} args - Arguments to delete one SalaryPayment.
     * @example
     * // Delete one SalaryPayment
     * const SalaryPayment = await prisma.salaryPayment.delete({
     *   where: {
     *     // ... filter to delete one SalaryPayment
     *   }
     * })
     * 
     */
    delete<T extends SalaryPaymentDeleteArgs>(args: SelectSubset<T, SalaryPaymentDeleteArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalaryPayment.
     * @param {SalaryPaymentUpdateArgs} args - Arguments to update one SalaryPayment.
     * @example
     * // Update one SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryPaymentUpdateArgs>(args: SelectSubset<T, SalaryPaymentUpdateArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalaryPayments.
     * @param {SalaryPaymentDeleteManyArgs} args - Arguments to filter SalaryPayments to delete.
     * @example
     * // Delete a few SalaryPayments
     * const { count } = await prisma.salaryPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryPaymentDeleteManyArgs>(args?: SelectSubset<T, SalaryPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryPayments
     * const salaryPayment = await prisma.salaryPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryPaymentUpdateManyArgs>(args: SelectSubset<T, SalaryPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalaryPayment.
     * @param {SalaryPaymentUpsertArgs} args - Arguments to update or create a SalaryPayment.
     * @example
     * // Update or create a SalaryPayment
     * const salaryPayment = await prisma.salaryPayment.upsert({
     *   create: {
     *     // ... data to create a SalaryPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryPayment we want to update
     *   }
     * })
     */
    upsert<T extends SalaryPaymentUpsertArgs>(args: SelectSubset<T, SalaryPaymentUpsertArgs<ExtArgs>>): Prisma__SalaryPaymentClient<$Result.GetResult<Prisma.$SalaryPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryPayments that matches the filter.
     * @param {SalaryPaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const salaryPayment = await prisma.salaryPayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SalaryPaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SalaryPayment.
     * @param {SalaryPaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const salaryPayment = await prisma.salaryPayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SalaryPaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SalaryPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentCountArgs} args - Arguments to filter SalaryPayments to count.
     * @example
     * // Count the number of SalaryPayments
     * const count = await prisma.salaryPayment.count({
     *   where: {
     *     // ... the filter for the SalaryPayments we want to count
     *   }
     * })
    **/
    count<T extends SalaryPaymentCountArgs>(
      args?: Subset<T, SalaryPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaryPaymentAggregateArgs>(args: Subset<T, SalaryPaymentAggregateArgs>): Prisma.PrismaPromise<GetSalaryPaymentAggregateType<T>>

    /**
     * Group by SalaryPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaryPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SalaryPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaryPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryPayment model
   */
  readonly fields: SalaryPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalaryPayment model
   */
  interface SalaryPaymentFieldRefs {
    readonly id: FieldRef<"SalaryPayment", 'String'>
    readonly transactionId: FieldRef<"SalaryPayment", 'String'>
    readonly amount: FieldRef<"SalaryPayment", 'Int'>
    readonly session: FieldRef<"SalaryPayment", 'String'>
    readonly month: FieldRef<"SalaryPayment", 'String'>
    readonly className: FieldRef<"SalaryPayment", 'String'>
    readonly method: FieldRef<"SalaryPayment", 'String'>
    readonly status: FieldRef<"SalaryPayment", 'String'>
    readonly paymentStatus: FieldRef<"SalaryPayment", 'String'>
    readonly note: FieldRef<"SalaryPayment", 'String'>
    readonly paidAt: FieldRef<"SalaryPayment", 'DateTime'>
    readonly studentId: FieldRef<"SalaryPayment", 'String'>
    readonly createdAt: FieldRef<"SalaryPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"SalaryPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryPayment findUnique
   */
  export type SalaryPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryPayment to fetch.
     */
    where: SalaryPaymentWhereUniqueInput
  }

  /**
   * SalaryPayment findUniqueOrThrow
   */
  export type SalaryPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryPayment to fetch.
     */
    where: SalaryPaymentWhereUniqueInput
  }

  /**
   * SalaryPayment findFirst
   */
  export type SalaryPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryPayment to fetch.
     */
    where?: SalaryPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryPayments to fetch.
     */
    orderBy?: SalaryPaymentOrderByWithRelationInput | SalaryPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryPayments.
     */
    cursor?: SalaryPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryPayments.
     */
    distinct?: SalaryPaymentScalarFieldEnum | SalaryPaymentScalarFieldEnum[]
  }

  /**
   * SalaryPayment findFirstOrThrow
   */
  export type SalaryPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryPayment to fetch.
     */
    where?: SalaryPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryPayments to fetch.
     */
    orderBy?: SalaryPaymentOrderByWithRelationInput | SalaryPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryPayments.
     */
    cursor?: SalaryPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryPayments.
     */
    distinct?: SalaryPaymentScalarFieldEnum | SalaryPaymentScalarFieldEnum[]
  }

  /**
   * SalaryPayment findMany
   */
  export type SalaryPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalaryPayments to fetch.
     */
    where?: SalaryPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryPayments to fetch.
     */
    orderBy?: SalaryPaymentOrderByWithRelationInput | SalaryPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryPayments.
     */
    cursor?: SalaryPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryPayments.
     */
    skip?: number
    distinct?: SalaryPaymentScalarFieldEnum | SalaryPaymentScalarFieldEnum[]
  }

  /**
   * SalaryPayment create
   */
  export type SalaryPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryPayment.
     */
    data: XOR<SalaryPaymentCreateInput, SalaryPaymentUncheckedCreateInput>
  }

  /**
   * SalaryPayment createMany
   */
  export type SalaryPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryPayments.
     */
    data: SalaryPaymentCreateManyInput | SalaryPaymentCreateManyInput[]
  }

  /**
   * SalaryPayment update
   */
  export type SalaryPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryPayment.
     */
    data: XOR<SalaryPaymentUpdateInput, SalaryPaymentUncheckedUpdateInput>
    /**
     * Choose, which SalaryPayment to update.
     */
    where: SalaryPaymentWhereUniqueInput
  }

  /**
   * SalaryPayment updateMany
   */
  export type SalaryPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryPayments.
     */
    data: XOR<SalaryPaymentUpdateManyMutationInput, SalaryPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SalaryPayments to update
     */
    where?: SalaryPaymentWhereInput
    /**
     * Limit how many SalaryPayments to update.
     */
    limit?: number
  }

  /**
   * SalaryPayment upsert
   */
  export type SalaryPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryPayment to update in case it exists.
     */
    where: SalaryPaymentWhereUniqueInput
    /**
     * In case the SalaryPayment found by the `where` argument doesn't exist, create a new SalaryPayment with this data.
     */
    create: XOR<SalaryPaymentCreateInput, SalaryPaymentUncheckedCreateInput>
    /**
     * In case the SalaryPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryPaymentUpdateInput, SalaryPaymentUncheckedUpdateInput>
  }

  /**
   * SalaryPayment delete
   */
  export type SalaryPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
    /**
     * Filter which SalaryPayment to delete.
     */
    where: SalaryPaymentWhereUniqueInput
  }

  /**
   * SalaryPayment deleteMany
   */
  export type SalaryPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryPayments to delete
     */
    where?: SalaryPaymentWhereInput
    /**
     * Limit how many SalaryPayments to delete.
     */
    limit?: number
  }

  /**
   * SalaryPayment findRaw
   */
  export type SalaryPaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalaryPayment aggregateRaw
   */
  export type SalaryPaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalaryPayment without action
   */
  export type SalaryPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryPayment
     */
    select?: SalaryPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryPayment
     */
    omit?: SalaryPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryPaymentInclude<ExtArgs> | null
  }


  /**
   * Model OtherPayment
   */

  export type AggregateOtherPayment = {
    _count: OtherPaymentCountAggregateOutputType | null
    _avg: OtherPaymentAvgAggregateOutputType | null
    _sum: OtherPaymentSumAggregateOutputType | null
    _min: OtherPaymentMinAggregateOutputType | null
    _max: OtherPaymentMaxAggregateOutputType | null
  }

  export type OtherPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type OtherPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type OtherPaymentMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    month: string | null
    session: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherPaymentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    month: string | null
    session: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherPaymentCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    month: number
    session: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtherPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type OtherPaymentSumAggregateInputType = {
    amount?: true
  }

  export type OtherPaymentMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    month?: true
    session?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherPaymentMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    month?: true
    session?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherPaymentCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    month?: true
    session?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtherPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherPayment to aggregate.
     */
    where?: OtherPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherPayments to fetch.
     */
    orderBy?: OtherPaymentOrderByWithRelationInput | OtherPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherPayments
    **/
    _count?: true | OtherPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherPaymentMaxAggregateInputType
  }

  export type GetOtherPaymentAggregateType<T extends OtherPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherPayment[P]>
      : GetScalarType<T[P], AggregateOtherPayment[P]>
  }




  export type OtherPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherPaymentWhereInput
    orderBy?: OtherPaymentOrderByWithAggregationInput | OtherPaymentOrderByWithAggregationInput[]
    by: OtherPaymentScalarFieldEnum[] | OtherPaymentScalarFieldEnum
    having?: OtherPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherPaymentCountAggregateInputType | true
    _avg?: OtherPaymentAvgAggregateInputType
    _sum?: OtherPaymentSumAggregateInputType
    _min?: OtherPaymentMinAggregateInputType
    _max?: OtherPaymentMaxAggregateInputType
  }

  export type OtherPaymentGroupByOutputType = {
    id: string
    name: string
    amount: number
    month: string
    session: string
    createdAt: Date
    updatedAt: Date
    _count: OtherPaymentCountAggregateOutputType | null
    _avg: OtherPaymentAvgAggregateOutputType | null
    _sum: OtherPaymentSumAggregateOutputType | null
    _min: OtherPaymentMinAggregateOutputType | null
    _max: OtherPaymentMaxAggregateOutputType | null
  }

  type GetOtherPaymentGroupByPayload<T extends OtherPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], OtherPaymentGroupByOutputType[P]>
        }
      >
    >


  export type OtherPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    month?: boolean
    session?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otherPayment"]>



  export type OtherPaymentSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    month?: boolean
    session?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtherPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "month" | "session" | "createdAt" | "updatedAt", ExtArgs["result"]["otherPayment"]>

  export type $OtherPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherPayment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      month: string
      session: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otherPayment"]>
    composites: {}
  }

  type OtherPaymentGetPayload<S extends boolean | null | undefined | OtherPaymentDefaultArgs> = $Result.GetResult<Prisma.$OtherPaymentPayload, S>

  type OtherPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherPaymentCountAggregateInputType | true
    }

  export interface OtherPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherPayment'], meta: { name: 'OtherPayment' } }
    /**
     * Find zero or one OtherPayment that matches the filter.
     * @param {OtherPaymentFindUniqueArgs} args - Arguments to find a OtherPayment
     * @example
     * // Get one OtherPayment
     * const otherPayment = await prisma.otherPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherPaymentFindUniqueArgs>(args: SelectSubset<T, OtherPaymentFindUniqueArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherPaymentFindUniqueOrThrowArgs} args - Arguments to find a OtherPayment
     * @example
     * // Get one OtherPayment
     * const otherPayment = await prisma.otherPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentFindFirstArgs} args - Arguments to find a OtherPayment
     * @example
     * // Get one OtherPayment
     * const otherPayment = await prisma.otherPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherPaymentFindFirstArgs>(args?: SelectSubset<T, OtherPaymentFindFirstArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentFindFirstOrThrowArgs} args - Arguments to find a OtherPayment
     * @example
     * // Get one OtherPayment
     * const otherPayment = await prisma.otherPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherPayments
     * const otherPayments = await prisma.otherPayment.findMany()
     * 
     * // Get first 10 OtherPayments
     * const otherPayments = await prisma.otherPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherPaymentWithIdOnly = await prisma.otherPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtherPaymentFindManyArgs>(args?: SelectSubset<T, OtherPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherPayment.
     * @param {OtherPaymentCreateArgs} args - Arguments to create a OtherPayment.
     * @example
     * // Create one OtherPayment
     * const OtherPayment = await prisma.otherPayment.create({
     *   data: {
     *     // ... data to create a OtherPayment
     *   }
     * })
     * 
     */
    create<T extends OtherPaymentCreateArgs>(args: SelectSubset<T, OtherPaymentCreateArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherPayments.
     * @param {OtherPaymentCreateManyArgs} args - Arguments to create many OtherPayments.
     * @example
     * // Create many OtherPayments
     * const otherPayment = await prisma.otherPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherPaymentCreateManyArgs>(args?: SelectSubset<T, OtherPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtherPayment.
     * @param {OtherPaymentDeleteArgs} args - Arguments to delete one OtherPayment.
     * @example
     * // Delete one OtherPayment
     * const OtherPayment = await prisma.otherPayment.delete({
     *   where: {
     *     // ... filter to delete one OtherPayment
     *   }
     * })
     * 
     */
    delete<T extends OtherPaymentDeleteArgs>(args: SelectSubset<T, OtherPaymentDeleteArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherPayment.
     * @param {OtherPaymentUpdateArgs} args - Arguments to update one OtherPayment.
     * @example
     * // Update one OtherPayment
     * const otherPayment = await prisma.otherPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherPaymentUpdateArgs>(args: SelectSubset<T, OtherPaymentUpdateArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherPayments.
     * @param {OtherPaymentDeleteManyArgs} args - Arguments to filter OtherPayments to delete.
     * @example
     * // Delete a few OtherPayments
     * const { count } = await prisma.otherPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherPaymentDeleteManyArgs>(args?: SelectSubset<T, OtherPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherPayments
     * const otherPayment = await prisma.otherPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherPaymentUpdateManyArgs>(args: SelectSubset<T, OtherPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtherPayment.
     * @param {OtherPaymentUpsertArgs} args - Arguments to update or create a OtherPayment.
     * @example
     * // Update or create a OtherPayment
     * const otherPayment = await prisma.otherPayment.upsert({
     *   create: {
     *     // ... data to create a OtherPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherPayment we want to update
     *   }
     * })
     */
    upsert<T extends OtherPaymentUpsertArgs>(args: SelectSubset<T, OtherPaymentUpsertArgs<ExtArgs>>): Prisma__OtherPaymentClient<$Result.GetResult<Prisma.$OtherPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherPayments that matches the filter.
     * @param {OtherPaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const otherPayment = await prisma.otherPayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OtherPaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OtherPayment.
     * @param {OtherPaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const otherPayment = await prisma.otherPayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OtherPaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OtherPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentCountArgs} args - Arguments to filter OtherPayments to count.
     * @example
     * // Count the number of OtherPayments
     * const count = await prisma.otherPayment.count({
     *   where: {
     *     // ... the filter for the OtherPayments we want to count
     *   }
     * })
    **/
    count<T extends OtherPaymentCountArgs>(
      args?: Subset<T, OtherPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtherPaymentAggregateArgs>(args: Subset<T, OtherPaymentAggregateArgs>): Prisma.PrismaPromise<GetOtherPaymentAggregateType<T>>

    /**
     * Group by OtherPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtherPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherPaymentGroupByArgs['orderBy'] }
        : { orderBy?: OtherPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtherPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherPayment model
   */
  readonly fields: OtherPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtherPayment model
   */
  interface OtherPaymentFieldRefs {
    readonly id: FieldRef<"OtherPayment", 'String'>
    readonly name: FieldRef<"OtherPayment", 'String'>
    readonly amount: FieldRef<"OtherPayment", 'Int'>
    readonly month: FieldRef<"OtherPayment", 'String'>
    readonly session: FieldRef<"OtherPayment", 'String'>
    readonly createdAt: FieldRef<"OtherPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"OtherPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtherPayment findUnique
   */
  export type OtherPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter, which OtherPayment to fetch.
     */
    where: OtherPaymentWhereUniqueInput
  }

  /**
   * OtherPayment findUniqueOrThrow
   */
  export type OtherPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter, which OtherPayment to fetch.
     */
    where: OtherPaymentWhereUniqueInput
  }

  /**
   * OtherPayment findFirst
   */
  export type OtherPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter, which OtherPayment to fetch.
     */
    where?: OtherPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherPayments to fetch.
     */
    orderBy?: OtherPaymentOrderByWithRelationInput | OtherPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherPayments.
     */
    cursor?: OtherPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherPayments.
     */
    distinct?: OtherPaymentScalarFieldEnum | OtherPaymentScalarFieldEnum[]
  }

  /**
   * OtherPayment findFirstOrThrow
   */
  export type OtherPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter, which OtherPayment to fetch.
     */
    where?: OtherPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherPayments to fetch.
     */
    orderBy?: OtherPaymentOrderByWithRelationInput | OtherPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherPayments.
     */
    cursor?: OtherPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherPayments.
     */
    distinct?: OtherPaymentScalarFieldEnum | OtherPaymentScalarFieldEnum[]
  }

  /**
   * OtherPayment findMany
   */
  export type OtherPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter, which OtherPayments to fetch.
     */
    where?: OtherPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherPayments to fetch.
     */
    orderBy?: OtherPaymentOrderByWithRelationInput | OtherPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherPayments.
     */
    cursor?: OtherPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherPayments.
     */
    skip?: number
    distinct?: OtherPaymentScalarFieldEnum | OtherPaymentScalarFieldEnum[]
  }

  /**
   * OtherPayment create
   */
  export type OtherPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a OtherPayment.
     */
    data: XOR<OtherPaymentCreateInput, OtherPaymentUncheckedCreateInput>
  }

  /**
   * OtherPayment createMany
   */
  export type OtherPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherPayments.
     */
    data: OtherPaymentCreateManyInput | OtherPaymentCreateManyInput[]
  }

  /**
   * OtherPayment update
   */
  export type OtherPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a OtherPayment.
     */
    data: XOR<OtherPaymentUpdateInput, OtherPaymentUncheckedUpdateInput>
    /**
     * Choose, which OtherPayment to update.
     */
    where: OtherPaymentWhereUniqueInput
  }

  /**
   * OtherPayment updateMany
   */
  export type OtherPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherPayments.
     */
    data: XOR<OtherPaymentUpdateManyMutationInput, OtherPaymentUncheckedUpdateManyInput>
    /**
     * Filter which OtherPayments to update
     */
    where?: OtherPaymentWhereInput
    /**
     * Limit how many OtherPayments to update.
     */
    limit?: number
  }

  /**
   * OtherPayment upsert
   */
  export type OtherPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the OtherPayment to update in case it exists.
     */
    where: OtherPaymentWhereUniqueInput
    /**
     * In case the OtherPayment found by the `where` argument doesn't exist, create a new OtherPayment with this data.
     */
    create: XOR<OtherPaymentCreateInput, OtherPaymentUncheckedCreateInput>
    /**
     * In case the OtherPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherPaymentUpdateInput, OtherPaymentUncheckedUpdateInput>
  }

  /**
   * OtherPayment delete
   */
  export type OtherPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
    /**
     * Filter which OtherPayment to delete.
     */
    where: OtherPaymentWhereUniqueInput
  }

  /**
   * OtherPayment deleteMany
   */
  export type OtherPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherPayments to delete
     */
    where?: OtherPaymentWhereInput
    /**
     * Limit how many OtherPayments to delete.
     */
    limit?: number
  }

  /**
   * OtherPayment findRaw
   */
  export type OtherPaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OtherPayment aggregateRaw
   */
  export type OtherPaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OtherPayment without action
   */
  export type OtherPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherPayment
     */
    select?: OtherPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherPayment
     */
    omit?: OtherPaymentOmit<ExtArgs> | null
  }


  /**
   * Model HousePayment
   */

  export type AggregateHousePayment = {
    _count: HousePaymentCountAggregateOutputType | null
    _avg: HousePaymentAvgAggregateOutputType | null
    _sum: HousePaymentSumAggregateOutputType | null
    _min: HousePaymentMinAggregateOutputType | null
    _max: HousePaymentMaxAggregateOutputType | null
  }

  export type HousePaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type HousePaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type HousePaymentMinAggregateOutputType = {
    id: string | null
    houseName: string | null
    session: string | null
    month: string | null
    amount: number | null
    method: string | null
    paymentStatus: string | null
    houseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HousePaymentMaxAggregateOutputType = {
    id: string | null
    houseName: string | null
    session: string | null
    month: string | null
    amount: number | null
    method: string | null
    paymentStatus: string | null
    houseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HousePaymentCountAggregateOutputType = {
    id: number
    houseName: number
    session: number
    month: number
    amount: number
    method: number
    paymentStatus: number
    houseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HousePaymentAvgAggregateInputType = {
    amount?: true
  }

  export type HousePaymentSumAggregateInputType = {
    amount?: true
  }

  export type HousePaymentMinAggregateInputType = {
    id?: true
    houseName?: true
    session?: true
    month?: true
    amount?: true
    method?: true
    paymentStatus?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HousePaymentMaxAggregateInputType = {
    id?: true
    houseName?: true
    session?: true
    month?: true
    amount?: true
    method?: true
    paymentStatus?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HousePaymentCountAggregateInputType = {
    id?: true
    houseName?: true
    session?: true
    month?: true
    amount?: true
    method?: true
    paymentStatus?: true
    houseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HousePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HousePayment to aggregate.
     */
    where?: HousePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousePayments to fetch.
     */
    orderBy?: HousePaymentOrderByWithRelationInput | HousePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HousePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HousePayments
    **/
    _count?: true | HousePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HousePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HousePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HousePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HousePaymentMaxAggregateInputType
  }

  export type GetHousePaymentAggregateType<T extends HousePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateHousePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousePayment[P]>
      : GetScalarType<T[P], AggregateHousePayment[P]>
  }




  export type HousePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HousePaymentWhereInput
    orderBy?: HousePaymentOrderByWithAggregationInput | HousePaymentOrderByWithAggregationInput[]
    by: HousePaymentScalarFieldEnum[] | HousePaymentScalarFieldEnum
    having?: HousePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HousePaymentCountAggregateInputType | true
    _avg?: HousePaymentAvgAggregateInputType
    _sum?: HousePaymentSumAggregateInputType
    _min?: HousePaymentMinAggregateInputType
    _max?: HousePaymentMaxAggregateInputType
  }

  export type HousePaymentGroupByOutputType = {
    id: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    houseId: string
    createdAt: Date
    updatedAt: Date
    _count: HousePaymentCountAggregateOutputType | null
    _avg: HousePaymentAvgAggregateOutputType | null
    _sum: HousePaymentSumAggregateOutputType | null
    _min: HousePaymentMinAggregateOutputType | null
    _max: HousePaymentMaxAggregateOutputType | null
  }

  type GetHousePaymentGroupByPayload<T extends HousePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HousePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HousePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HousePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], HousePaymentGroupByOutputType[P]>
        }
      >
    >


  export type HousePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    houseName?: boolean
    session?: boolean
    month?: boolean
    amount?: boolean
    method?: boolean
    paymentStatus?: boolean
    houseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["housePayment"]>



  export type HousePaymentSelectScalar = {
    id?: boolean
    houseName?: boolean
    session?: boolean
    month?: boolean
    amount?: boolean
    method?: boolean
    paymentStatus?: boolean
    houseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HousePaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "houseName" | "session" | "month" | "amount" | "method" | "paymentStatus" | "houseId" | "createdAt" | "updatedAt", ExtArgs["result"]["housePayment"]>
  export type HousePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }

  export type $HousePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HousePayment"
    objects: {
      house: Prisma.$HousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      houseName: string
      session: string
      month: string
      amount: number
      method: string
      paymentStatus: string
      houseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["housePayment"]>
    composites: {}
  }

  type HousePaymentGetPayload<S extends boolean | null | undefined | HousePaymentDefaultArgs> = $Result.GetResult<Prisma.$HousePaymentPayload, S>

  type HousePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HousePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HousePaymentCountAggregateInputType | true
    }

  export interface HousePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HousePayment'], meta: { name: 'HousePayment' } }
    /**
     * Find zero or one HousePayment that matches the filter.
     * @param {HousePaymentFindUniqueArgs} args - Arguments to find a HousePayment
     * @example
     * // Get one HousePayment
     * const housePayment = await prisma.housePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HousePaymentFindUniqueArgs>(args: SelectSubset<T, HousePaymentFindUniqueArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HousePayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HousePaymentFindUniqueOrThrowArgs} args - Arguments to find a HousePayment
     * @example
     * // Get one HousePayment
     * const housePayment = await prisma.housePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HousePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, HousePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HousePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentFindFirstArgs} args - Arguments to find a HousePayment
     * @example
     * // Get one HousePayment
     * const housePayment = await prisma.housePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HousePaymentFindFirstArgs>(args?: SelectSubset<T, HousePaymentFindFirstArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HousePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentFindFirstOrThrowArgs} args - Arguments to find a HousePayment
     * @example
     * // Get one HousePayment
     * const housePayment = await prisma.housePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HousePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, HousePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HousePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HousePayments
     * const housePayments = await prisma.housePayment.findMany()
     * 
     * // Get first 10 HousePayments
     * const housePayments = await prisma.housePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const housePaymentWithIdOnly = await prisma.housePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HousePaymentFindManyArgs>(args?: SelectSubset<T, HousePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HousePayment.
     * @param {HousePaymentCreateArgs} args - Arguments to create a HousePayment.
     * @example
     * // Create one HousePayment
     * const HousePayment = await prisma.housePayment.create({
     *   data: {
     *     // ... data to create a HousePayment
     *   }
     * })
     * 
     */
    create<T extends HousePaymentCreateArgs>(args: SelectSubset<T, HousePaymentCreateArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HousePayments.
     * @param {HousePaymentCreateManyArgs} args - Arguments to create many HousePayments.
     * @example
     * // Create many HousePayments
     * const housePayment = await prisma.housePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HousePaymentCreateManyArgs>(args?: SelectSubset<T, HousePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HousePayment.
     * @param {HousePaymentDeleteArgs} args - Arguments to delete one HousePayment.
     * @example
     * // Delete one HousePayment
     * const HousePayment = await prisma.housePayment.delete({
     *   where: {
     *     // ... filter to delete one HousePayment
     *   }
     * })
     * 
     */
    delete<T extends HousePaymentDeleteArgs>(args: SelectSubset<T, HousePaymentDeleteArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HousePayment.
     * @param {HousePaymentUpdateArgs} args - Arguments to update one HousePayment.
     * @example
     * // Update one HousePayment
     * const housePayment = await prisma.housePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HousePaymentUpdateArgs>(args: SelectSubset<T, HousePaymentUpdateArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HousePayments.
     * @param {HousePaymentDeleteManyArgs} args - Arguments to filter HousePayments to delete.
     * @example
     * // Delete a few HousePayments
     * const { count } = await prisma.housePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HousePaymentDeleteManyArgs>(args?: SelectSubset<T, HousePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HousePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HousePayments
     * const housePayment = await prisma.housePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HousePaymentUpdateManyArgs>(args: SelectSubset<T, HousePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HousePayment.
     * @param {HousePaymentUpsertArgs} args - Arguments to update or create a HousePayment.
     * @example
     * // Update or create a HousePayment
     * const housePayment = await prisma.housePayment.upsert({
     *   create: {
     *     // ... data to create a HousePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HousePayment we want to update
     *   }
     * })
     */
    upsert<T extends HousePaymentUpsertArgs>(args: SelectSubset<T, HousePaymentUpsertArgs<ExtArgs>>): Prisma__HousePaymentClient<$Result.GetResult<Prisma.$HousePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HousePayments that matches the filter.
     * @param {HousePaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const housePayment = await prisma.housePayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HousePaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HousePayment.
     * @param {HousePaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const housePayment = await prisma.housePayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HousePaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HousePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentCountArgs} args - Arguments to filter HousePayments to count.
     * @example
     * // Count the number of HousePayments
     * const count = await prisma.housePayment.count({
     *   where: {
     *     // ... the filter for the HousePayments we want to count
     *   }
     * })
    **/
    count<T extends HousePaymentCountArgs>(
      args?: Subset<T, HousePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HousePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HousePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HousePaymentAggregateArgs>(args: Subset<T, HousePaymentAggregateArgs>): Prisma.PrismaPromise<GetHousePaymentAggregateType<T>>

    /**
     * Group by HousePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousePaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HousePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HousePaymentGroupByArgs['orderBy'] }
        : { orderBy?: HousePaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HousePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHousePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HousePayment model
   */
  readonly fields: HousePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HousePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HousePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends HouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseDefaultArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HousePayment model
   */
  interface HousePaymentFieldRefs {
    readonly id: FieldRef<"HousePayment", 'String'>
    readonly houseName: FieldRef<"HousePayment", 'String'>
    readonly session: FieldRef<"HousePayment", 'String'>
    readonly month: FieldRef<"HousePayment", 'String'>
    readonly amount: FieldRef<"HousePayment", 'Int'>
    readonly method: FieldRef<"HousePayment", 'String'>
    readonly paymentStatus: FieldRef<"HousePayment", 'String'>
    readonly houseId: FieldRef<"HousePayment", 'String'>
    readonly createdAt: FieldRef<"HousePayment", 'DateTime'>
    readonly updatedAt: FieldRef<"HousePayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HousePayment findUnique
   */
  export type HousePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter, which HousePayment to fetch.
     */
    where: HousePaymentWhereUniqueInput
  }

  /**
   * HousePayment findUniqueOrThrow
   */
  export type HousePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter, which HousePayment to fetch.
     */
    where: HousePaymentWhereUniqueInput
  }

  /**
   * HousePayment findFirst
   */
  export type HousePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter, which HousePayment to fetch.
     */
    where?: HousePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousePayments to fetch.
     */
    orderBy?: HousePaymentOrderByWithRelationInput | HousePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HousePayments.
     */
    cursor?: HousePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HousePayments.
     */
    distinct?: HousePaymentScalarFieldEnum | HousePaymentScalarFieldEnum[]
  }

  /**
   * HousePayment findFirstOrThrow
   */
  export type HousePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter, which HousePayment to fetch.
     */
    where?: HousePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousePayments to fetch.
     */
    orderBy?: HousePaymentOrderByWithRelationInput | HousePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HousePayments.
     */
    cursor?: HousePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HousePayments.
     */
    distinct?: HousePaymentScalarFieldEnum | HousePaymentScalarFieldEnum[]
  }

  /**
   * HousePayment findMany
   */
  export type HousePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter, which HousePayments to fetch.
     */
    where?: HousePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousePayments to fetch.
     */
    orderBy?: HousePaymentOrderByWithRelationInput | HousePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HousePayments.
     */
    cursor?: HousePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousePayments.
     */
    skip?: number
    distinct?: HousePaymentScalarFieldEnum | HousePaymentScalarFieldEnum[]
  }

  /**
   * HousePayment create
   */
  export type HousePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a HousePayment.
     */
    data: XOR<HousePaymentCreateInput, HousePaymentUncheckedCreateInput>
  }

  /**
   * HousePayment createMany
   */
  export type HousePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HousePayments.
     */
    data: HousePaymentCreateManyInput | HousePaymentCreateManyInput[]
  }

  /**
   * HousePayment update
   */
  export type HousePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a HousePayment.
     */
    data: XOR<HousePaymentUpdateInput, HousePaymentUncheckedUpdateInput>
    /**
     * Choose, which HousePayment to update.
     */
    where: HousePaymentWhereUniqueInput
  }

  /**
   * HousePayment updateMany
   */
  export type HousePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HousePayments.
     */
    data: XOR<HousePaymentUpdateManyMutationInput, HousePaymentUncheckedUpdateManyInput>
    /**
     * Filter which HousePayments to update
     */
    where?: HousePaymentWhereInput
    /**
     * Limit how many HousePayments to update.
     */
    limit?: number
  }

  /**
   * HousePayment upsert
   */
  export type HousePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the HousePayment to update in case it exists.
     */
    where: HousePaymentWhereUniqueInput
    /**
     * In case the HousePayment found by the `where` argument doesn't exist, create a new HousePayment with this data.
     */
    create: XOR<HousePaymentCreateInput, HousePaymentUncheckedCreateInput>
    /**
     * In case the HousePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HousePaymentUpdateInput, HousePaymentUncheckedUpdateInput>
  }

  /**
   * HousePayment delete
   */
  export type HousePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
    /**
     * Filter which HousePayment to delete.
     */
    where: HousePaymentWhereUniqueInput
  }

  /**
   * HousePayment deleteMany
   */
  export type HousePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HousePayments to delete
     */
    where?: HousePaymentWhereInput
    /**
     * Limit how many HousePayments to delete.
     */
    limit?: number
  }

  /**
   * HousePayment findRaw
   */
  export type HousePaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HousePayment aggregateRaw
   */
  export type HousePaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HousePayment without action
   */
  export type HousePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousePayment
     */
    select?: HousePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HousePayment
     */
    omit?: HousePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousePaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    role: 'role',
    status: 'status',
    phone: 'phone',
    referalCode: 'referalCode',
    isNewUser: 'isNewUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    roomCount: 'roomCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    availableTimes: 'availableTimes',
    bookTimes: 'bookTimes',
    houseId: 'houseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const CounterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CounterScalarFieldEnum = (typeof CounterScalarFieldEnum)[keyof typeof CounterScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    session: 'session',
    studentId: 'studentId',
    name: 'name',
    nameBangla: 'nameBangla',
    fName: 'fName',
    mName: 'mName',
    gender: 'gender',
    dob: 'dob',
    nationality: 'nationality',
    religion: 'religion',
    imageUrl: 'imageUrl',
    school: 'school',
    className: 'className',
    section: 'section',
    shift: 'shift',
    group: 'group',
    roll: 'roll',
    fPhone: 'fPhone',
    mPhone: 'mPhone',
    presentHouseNo: 'presentHouseNo',
    presentMoholla: 'presentMoholla',
    presentPost: 'presentPost',
    presentThana: 'presentThana',
    permanentVillage: 'permanentVillage',
    permanentPost: 'permanentPost',
    permanentThana: 'permanentThana',
    permanentDistrict: 'permanentDistrict',
    isPresent: 'isPresent',
    leftReason: 'leftReason',
    admissionFee: 'admissionFee',
    salaryFee: 'salaryFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AdmissionFeeScalarFieldEnum: {
    id: 'id',
    className: 'className',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdmissionFeeScalarFieldEnum = (typeof AdmissionFeeScalarFieldEnum)[keyof typeof AdmissionFeeScalarFieldEnum]


  export const SalaryFeeScalarFieldEnum: {
    id: 'id',
    className: 'className',
    group: 'group',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaryFeeScalarFieldEnum = (typeof SalaryFeeScalarFieldEnum)[keyof typeof SalaryFeeScalarFieldEnum]


  export const AdmissionPaymentScalarFieldEnum: {
    id: 'id',
    className: 'className',
    amount: 'amount',
    method: 'method',
    status: 'status',
    paymentStatus: 'paymentStatus',
    session: 'session',
    month: 'month',
    paidAt: 'paidAt',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdmissionPaymentScalarFieldEnum = (typeof AdmissionPaymentScalarFieldEnum)[keyof typeof AdmissionPaymentScalarFieldEnum]


  export const SalaryPaymentScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    amount: 'amount',
    session: 'session',
    month: 'month',
    className: 'className',
    method: 'method',
    status: 'status',
    paymentStatus: 'paymentStatus',
    note: 'note',
    paidAt: 'paidAt',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaryPaymentScalarFieldEnum = (typeof SalaryPaymentScalarFieldEnum)[keyof typeof SalaryPaymentScalarFieldEnum]


  export const OtherPaymentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    month: 'month',
    session: 'session',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtherPaymentScalarFieldEnum = (typeof OtherPaymentScalarFieldEnum)[keyof typeof OtherPaymentScalarFieldEnum]


  export const HousePaymentScalarFieldEnum: {
    id: 'id',
    houseName: 'houseName',
    session: 'session',
    month: 'month',
    amount: 'amount',
    method: 'method',
    paymentStatus: 'paymentStatus',
    houseId: 'houseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HousePaymentScalarFieldEnum = (typeof HousePaymentScalarFieldEnum)[keyof typeof HousePaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    referalCode?: StringFilter<"User"> | string
    isNewUser?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    referalCode?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    referalCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    isNewUser?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "clerkId" | "email" | "referalCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    referalCode?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    referalCode?: StringWithAggregatesFilter<"User"> | string
    isNewUser?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HouseWhereInput = {
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    id?: StringFilter<"House"> | string
    name?: StringFilter<"House"> | string
    roomCount?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    rooms?: RoomListRelationFilter
    payments?: HousePaymentListRelationFilter
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    payments?: HousePaymentOrderByRelationAggregateInput
  }

  export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    name?: StringFilter<"House"> | string
    roomCount?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    rooms?: RoomListRelationFilter
    payments?: HousePaymentListRelationFilter
  }, "id">

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseCountOrderByAggregateInput
    _avg?: HouseAvgOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
    _sum?: HouseSumOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    OR?: HouseScalarWhereWithAggregatesInput[]
    NOT?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"House"> | string
    name?: StringWithAggregatesFilter<"House"> | string
    roomCount?: IntWithAggregatesFilter<"House"> | number
    createdAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    availableTimes?: StringNullableListFilter<"Room">
    bookTimes?: StringNullableListFilter<"Room">
    houseId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    availableTimes?: SortOrder
    bookTimes?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    house?: HouseOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    availableTimes?: StringNullableListFilter<"Room">
    bookTimes?: StringNullableListFilter<"Room">
    houseId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    availableTimes?: SortOrder
    bookTimes?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    availableTimes?: StringNullableListFilter<"Room">
    bookTimes?: StringNullableListFilter<"Room">
    houseId?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type CounterWhereInput = {
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    id?: StringFilter<"Counter"> | string
    name?: StringFilter<"Counter"> | string
    value?: IntFilter<"Counter"> | number
    createdAt?: DateTimeFilter<"Counter"> | Date | string
    updatedAt?: DateTimeFilter<"Counter"> | Date | string
  }

  export type CounterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    value?: IntFilter<"Counter"> | number
    createdAt?: DateTimeFilter<"Counter"> | Date | string
    updatedAt?: DateTimeFilter<"Counter"> | Date | string
  }, "id" | "name">

  export type CounterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CounterCountOrderByAggregateInput
    _avg?: CounterAvgOrderByAggregateInput
    _max?: CounterMaxOrderByAggregateInput
    _min?: CounterMinOrderByAggregateInput
    _sum?: CounterSumOrderByAggregateInput
  }

  export type CounterScalarWhereWithAggregatesInput = {
    AND?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    OR?: CounterScalarWhereWithAggregatesInput[]
    NOT?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Counter"> | string
    name?: StringWithAggregatesFilter<"Counter"> | string
    value?: IntWithAggregatesFilter<"Counter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Counter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Counter"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    session?: StringFilter<"Student"> | string
    studentId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    nameBangla?: StringFilter<"Student"> | string
    fName?: StringFilter<"Student"> | string
    mName?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    nationality?: StringFilter<"Student"> | string
    religion?: StringFilter<"Student"> | string
    imageUrl?: StringNullableFilter<"Student"> | string | null
    school?: StringFilter<"Student"> | string
    className?: StringFilter<"Student"> | string
    section?: StringNullableFilter<"Student"> | string | null
    shift?: StringNullableFilter<"Student"> | string | null
    group?: StringNullableFilter<"Student"> | string | null
    roll?: IntFilter<"Student"> | number
    fPhone?: StringFilter<"Student"> | string
    mPhone?: StringFilter<"Student"> | string
    presentHouseNo?: StringFilter<"Student"> | string
    presentMoholla?: StringFilter<"Student"> | string
    presentPost?: StringFilter<"Student"> | string
    presentThana?: StringFilter<"Student"> | string
    permanentVillage?: StringFilter<"Student"> | string
    permanentPost?: StringFilter<"Student"> | string
    permanentThana?: StringFilter<"Student"> | string
    permanentDistrict?: StringFilter<"Student"> | string
    isPresent?: BoolFilter<"Student"> | boolean
    leftReason?: StringNullableFilter<"Student"> | string | null
    admissionFee?: IntFilter<"Student"> | number
    salaryFee?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    admissionPayments?: AdmissionPaymentListRelationFilter
    salaryPayments?: SalaryPaymentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    session?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    nameBangla?: SortOrder
    fName?: SortOrder
    mName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    religion?: SortOrder
    imageUrl?: SortOrder
    school?: SortOrder
    className?: SortOrder
    section?: SortOrder
    shift?: SortOrder
    group?: SortOrder
    roll?: SortOrder
    fPhone?: SortOrder
    mPhone?: SortOrder
    presentHouseNo?: SortOrder
    presentMoholla?: SortOrder
    presentPost?: SortOrder
    presentThana?: SortOrder
    permanentVillage?: SortOrder
    permanentPost?: SortOrder
    permanentThana?: SortOrder
    permanentDistrict?: SortOrder
    isPresent?: SortOrder
    leftReason?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionPayments?: AdmissionPaymentOrderByRelationAggregateInput
    salaryPayments?: SalaryPaymentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    session?: StringFilter<"Student"> | string
    studentId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    nameBangla?: StringFilter<"Student"> | string
    fName?: StringFilter<"Student"> | string
    mName?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    nationality?: StringFilter<"Student"> | string
    religion?: StringFilter<"Student"> | string
    imageUrl?: StringNullableFilter<"Student"> | string | null
    school?: StringFilter<"Student"> | string
    className?: StringFilter<"Student"> | string
    section?: StringNullableFilter<"Student"> | string | null
    shift?: StringNullableFilter<"Student"> | string | null
    group?: StringNullableFilter<"Student"> | string | null
    roll?: IntFilter<"Student"> | number
    fPhone?: StringFilter<"Student"> | string
    mPhone?: StringFilter<"Student"> | string
    presentHouseNo?: StringFilter<"Student"> | string
    presentMoholla?: StringFilter<"Student"> | string
    presentPost?: StringFilter<"Student"> | string
    presentThana?: StringFilter<"Student"> | string
    permanentVillage?: StringFilter<"Student"> | string
    permanentPost?: StringFilter<"Student"> | string
    permanentThana?: StringFilter<"Student"> | string
    permanentDistrict?: StringFilter<"Student"> | string
    isPresent?: BoolFilter<"Student"> | boolean
    leftReason?: StringNullableFilter<"Student"> | string | null
    admissionFee?: IntFilter<"Student"> | number
    salaryFee?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    admissionPayments?: AdmissionPaymentListRelationFilter
    salaryPayments?: SalaryPaymentListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    session?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    nameBangla?: SortOrder
    fName?: SortOrder
    mName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    religion?: SortOrder
    imageUrl?: SortOrder
    school?: SortOrder
    className?: SortOrder
    section?: SortOrder
    shift?: SortOrder
    group?: SortOrder
    roll?: SortOrder
    fPhone?: SortOrder
    mPhone?: SortOrder
    presentHouseNo?: SortOrder
    presentMoholla?: SortOrder
    presentPost?: SortOrder
    presentThana?: SortOrder
    permanentVillage?: SortOrder
    permanentPost?: SortOrder
    permanentThana?: SortOrder
    permanentDistrict?: SortOrder
    isPresent?: SortOrder
    leftReason?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    session?: StringWithAggregatesFilter<"Student"> | string
    studentId?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    nameBangla?: StringWithAggregatesFilter<"Student"> | string
    fName?: StringWithAggregatesFilter<"Student"> | string
    mName?: StringWithAggregatesFilter<"Student"> | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    dob?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    nationality?: StringWithAggregatesFilter<"Student"> | string
    religion?: StringWithAggregatesFilter<"Student"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    school?: StringWithAggregatesFilter<"Student"> | string
    className?: StringWithAggregatesFilter<"Student"> | string
    section?: StringNullableWithAggregatesFilter<"Student"> | string | null
    shift?: StringNullableWithAggregatesFilter<"Student"> | string | null
    group?: StringNullableWithAggregatesFilter<"Student"> | string | null
    roll?: IntWithAggregatesFilter<"Student"> | number
    fPhone?: StringWithAggregatesFilter<"Student"> | string
    mPhone?: StringWithAggregatesFilter<"Student"> | string
    presentHouseNo?: StringWithAggregatesFilter<"Student"> | string
    presentMoholla?: StringWithAggregatesFilter<"Student"> | string
    presentPost?: StringWithAggregatesFilter<"Student"> | string
    presentThana?: StringWithAggregatesFilter<"Student"> | string
    permanentVillage?: StringWithAggregatesFilter<"Student"> | string
    permanentPost?: StringWithAggregatesFilter<"Student"> | string
    permanentThana?: StringWithAggregatesFilter<"Student"> | string
    permanentDistrict?: StringWithAggregatesFilter<"Student"> | string
    isPresent?: BoolWithAggregatesFilter<"Student"> | boolean
    leftReason?: StringNullableWithAggregatesFilter<"Student"> | string | null
    admissionFee?: IntWithAggregatesFilter<"Student"> | number
    salaryFee?: IntWithAggregatesFilter<"Student"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type AdmissionFeeWhereInput = {
    AND?: AdmissionFeeWhereInput | AdmissionFeeWhereInput[]
    OR?: AdmissionFeeWhereInput[]
    NOT?: AdmissionFeeWhereInput | AdmissionFeeWhereInput[]
    id?: StringFilter<"AdmissionFee"> | string
    className?: StringFilter<"AdmissionFee"> | string
    amount?: IntFilter<"AdmissionFee"> | number
    createdAt?: DateTimeFilter<"AdmissionFee"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionFee"> | Date | string
  }

  export type AdmissionFeeOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    className?: string
    AND?: AdmissionFeeWhereInput | AdmissionFeeWhereInput[]
    OR?: AdmissionFeeWhereInput[]
    NOT?: AdmissionFeeWhereInput | AdmissionFeeWhereInput[]
    amount?: IntFilter<"AdmissionFee"> | number
    createdAt?: DateTimeFilter<"AdmissionFee"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionFee"> | Date | string
  }, "id" | "className">

  export type AdmissionFeeOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmissionFeeCountOrderByAggregateInput
    _avg?: AdmissionFeeAvgOrderByAggregateInput
    _max?: AdmissionFeeMaxOrderByAggregateInput
    _min?: AdmissionFeeMinOrderByAggregateInput
    _sum?: AdmissionFeeSumOrderByAggregateInput
  }

  export type AdmissionFeeScalarWhereWithAggregatesInput = {
    AND?: AdmissionFeeScalarWhereWithAggregatesInput | AdmissionFeeScalarWhereWithAggregatesInput[]
    OR?: AdmissionFeeScalarWhereWithAggregatesInput[]
    NOT?: AdmissionFeeScalarWhereWithAggregatesInput | AdmissionFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdmissionFee"> | string
    className?: StringWithAggregatesFilter<"AdmissionFee"> | string
    amount?: IntWithAggregatesFilter<"AdmissionFee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AdmissionFee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmissionFee"> | Date | string
  }

  export type SalaryFeeWhereInput = {
    AND?: SalaryFeeWhereInput | SalaryFeeWhereInput[]
    OR?: SalaryFeeWhereInput[]
    NOT?: SalaryFeeWhereInput | SalaryFeeWhereInput[]
    id?: StringFilter<"SalaryFee"> | string
    className?: StringFilter<"SalaryFee"> | string
    group?: StringNullableFilter<"SalaryFee"> | string | null
    amount?: IntFilter<"SalaryFee"> | number
    createdAt?: DateTimeFilter<"SalaryFee"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryFee"> | Date | string
  }

  export type SalaryFeeOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    group?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaryFeeWhereInput | SalaryFeeWhereInput[]
    OR?: SalaryFeeWhereInput[]
    NOT?: SalaryFeeWhereInput | SalaryFeeWhereInput[]
    className?: StringFilter<"SalaryFee"> | string
    group?: StringNullableFilter<"SalaryFee"> | string | null
    amount?: IntFilter<"SalaryFee"> | number
    createdAt?: DateTimeFilter<"SalaryFee"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryFee"> | Date | string
  }, "id">

  export type SalaryFeeOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    group?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaryFeeCountOrderByAggregateInput
    _avg?: SalaryFeeAvgOrderByAggregateInput
    _max?: SalaryFeeMaxOrderByAggregateInput
    _min?: SalaryFeeMinOrderByAggregateInput
    _sum?: SalaryFeeSumOrderByAggregateInput
  }

  export type SalaryFeeScalarWhereWithAggregatesInput = {
    AND?: SalaryFeeScalarWhereWithAggregatesInput | SalaryFeeScalarWhereWithAggregatesInput[]
    OR?: SalaryFeeScalarWhereWithAggregatesInput[]
    NOT?: SalaryFeeScalarWhereWithAggregatesInput | SalaryFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalaryFee"> | string
    className?: StringWithAggregatesFilter<"SalaryFee"> | string
    group?: StringNullableWithAggregatesFilter<"SalaryFee"> | string | null
    amount?: IntWithAggregatesFilter<"SalaryFee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SalaryFee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalaryFee"> | Date | string
  }

  export type AdmissionPaymentWhereInput = {
    AND?: AdmissionPaymentWhereInput | AdmissionPaymentWhereInput[]
    OR?: AdmissionPaymentWhereInput[]
    NOT?: AdmissionPaymentWhereInput | AdmissionPaymentWhereInput[]
    id?: StringFilter<"AdmissionPayment"> | string
    className?: StringFilter<"AdmissionPayment"> | string
    amount?: IntFilter<"AdmissionPayment"> | number
    method?: StringFilter<"AdmissionPayment"> | string
    status?: StringFilter<"AdmissionPayment"> | string
    paymentStatus?: StringFilter<"AdmissionPayment"> | string
    session?: StringFilter<"AdmissionPayment"> | string
    month?: StringFilter<"AdmissionPayment"> | string
    paidAt?: DateTimeNullableFilter<"AdmissionPayment"> | Date | string | null
    studentId?: StringFilter<"AdmissionPayment"> | string
    createdAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AdmissionPaymentOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    session?: SortOrder
    month?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type AdmissionPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdmissionPaymentWhereInput | AdmissionPaymentWhereInput[]
    OR?: AdmissionPaymentWhereInput[]
    NOT?: AdmissionPaymentWhereInput | AdmissionPaymentWhereInput[]
    className?: StringFilter<"AdmissionPayment"> | string
    amount?: IntFilter<"AdmissionPayment"> | number
    method?: StringFilter<"AdmissionPayment"> | string
    status?: StringFilter<"AdmissionPayment"> | string
    paymentStatus?: StringFilter<"AdmissionPayment"> | string
    session?: StringFilter<"AdmissionPayment"> | string
    month?: StringFilter<"AdmissionPayment"> | string
    paidAt?: DateTimeNullableFilter<"AdmissionPayment"> | Date | string | null
    studentId?: StringFilter<"AdmissionPayment"> | string
    createdAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AdmissionPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    session?: SortOrder
    month?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmissionPaymentCountOrderByAggregateInput
    _avg?: AdmissionPaymentAvgOrderByAggregateInput
    _max?: AdmissionPaymentMaxOrderByAggregateInput
    _min?: AdmissionPaymentMinOrderByAggregateInput
    _sum?: AdmissionPaymentSumOrderByAggregateInput
  }

  export type AdmissionPaymentScalarWhereWithAggregatesInput = {
    AND?: AdmissionPaymentScalarWhereWithAggregatesInput | AdmissionPaymentScalarWhereWithAggregatesInput[]
    OR?: AdmissionPaymentScalarWhereWithAggregatesInput[]
    NOT?: AdmissionPaymentScalarWhereWithAggregatesInput | AdmissionPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    className?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    amount?: IntWithAggregatesFilter<"AdmissionPayment"> | number
    method?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    status?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    paymentStatus?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    session?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    month?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"AdmissionPayment"> | Date | string | null
    studentId?: StringWithAggregatesFilter<"AdmissionPayment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdmissionPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmissionPayment"> | Date | string
  }

  export type SalaryPaymentWhereInput = {
    AND?: SalaryPaymentWhereInput | SalaryPaymentWhereInput[]
    OR?: SalaryPaymentWhereInput[]
    NOT?: SalaryPaymentWhereInput | SalaryPaymentWhereInput[]
    id?: StringFilter<"SalaryPayment"> | string
    transactionId?: StringNullableFilter<"SalaryPayment"> | string | null
    amount?: IntFilter<"SalaryPayment"> | number
    session?: StringFilter<"SalaryPayment"> | string
    month?: StringFilter<"SalaryPayment"> | string
    className?: StringFilter<"SalaryPayment"> | string
    method?: StringNullableFilter<"SalaryPayment"> | string | null
    status?: StringFilter<"SalaryPayment"> | string
    paymentStatus?: StringFilter<"SalaryPayment"> | string
    note?: StringNullableFilter<"SalaryPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"SalaryPayment"> | Date | string | null
    studentId?: StringFilter<"SalaryPayment"> | string
    createdAt?: DateTimeFilter<"SalaryPayment"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryPayment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type SalaryPaymentOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    session?: SortOrder
    month?: SortOrder
    className?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    note?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type SalaryPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaryPaymentWhereInput | SalaryPaymentWhereInput[]
    OR?: SalaryPaymentWhereInput[]
    NOT?: SalaryPaymentWhereInput | SalaryPaymentWhereInput[]
    transactionId?: StringNullableFilter<"SalaryPayment"> | string | null
    amount?: IntFilter<"SalaryPayment"> | number
    session?: StringFilter<"SalaryPayment"> | string
    month?: StringFilter<"SalaryPayment"> | string
    className?: StringFilter<"SalaryPayment"> | string
    method?: StringNullableFilter<"SalaryPayment"> | string | null
    status?: StringFilter<"SalaryPayment"> | string
    paymentStatus?: StringFilter<"SalaryPayment"> | string
    note?: StringNullableFilter<"SalaryPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"SalaryPayment"> | Date | string | null
    studentId?: StringFilter<"SalaryPayment"> | string
    createdAt?: DateTimeFilter<"SalaryPayment"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryPayment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type SalaryPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    session?: SortOrder
    month?: SortOrder
    className?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    note?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaryPaymentCountOrderByAggregateInput
    _avg?: SalaryPaymentAvgOrderByAggregateInput
    _max?: SalaryPaymentMaxOrderByAggregateInput
    _min?: SalaryPaymentMinOrderByAggregateInput
    _sum?: SalaryPaymentSumOrderByAggregateInput
  }

  export type SalaryPaymentScalarWhereWithAggregatesInput = {
    AND?: SalaryPaymentScalarWhereWithAggregatesInput | SalaryPaymentScalarWhereWithAggregatesInput[]
    OR?: SalaryPaymentScalarWhereWithAggregatesInput[]
    NOT?: SalaryPaymentScalarWhereWithAggregatesInput | SalaryPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalaryPayment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"SalaryPayment"> | string | null
    amount?: IntWithAggregatesFilter<"SalaryPayment"> | number
    session?: StringWithAggregatesFilter<"SalaryPayment"> | string
    month?: StringWithAggregatesFilter<"SalaryPayment"> | string
    className?: StringWithAggregatesFilter<"SalaryPayment"> | string
    method?: StringNullableWithAggregatesFilter<"SalaryPayment"> | string | null
    status?: StringWithAggregatesFilter<"SalaryPayment"> | string
    paymentStatus?: StringWithAggregatesFilter<"SalaryPayment"> | string
    note?: StringNullableWithAggregatesFilter<"SalaryPayment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"SalaryPayment"> | Date | string | null
    studentId?: StringWithAggregatesFilter<"SalaryPayment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalaryPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalaryPayment"> | Date | string
  }

  export type OtherPaymentWhereInput = {
    AND?: OtherPaymentWhereInput | OtherPaymentWhereInput[]
    OR?: OtherPaymentWhereInput[]
    NOT?: OtherPaymentWhereInput | OtherPaymentWhereInput[]
    id?: StringFilter<"OtherPayment"> | string
    name?: StringFilter<"OtherPayment"> | string
    amount?: IntFilter<"OtherPayment"> | number
    month?: StringFilter<"OtherPayment"> | string
    session?: StringFilter<"OtherPayment"> | string
    createdAt?: DateTimeFilter<"OtherPayment"> | Date | string
    updatedAt?: DateTimeFilter<"OtherPayment"> | Date | string
  }

  export type OtherPaymentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtherPaymentWhereInput | OtherPaymentWhereInput[]
    OR?: OtherPaymentWhereInput[]
    NOT?: OtherPaymentWhereInput | OtherPaymentWhereInput[]
    name?: StringFilter<"OtherPayment"> | string
    amount?: IntFilter<"OtherPayment"> | number
    month?: StringFilter<"OtherPayment"> | string
    session?: StringFilter<"OtherPayment"> | string
    createdAt?: DateTimeFilter<"OtherPayment"> | Date | string
    updatedAt?: DateTimeFilter<"OtherPayment"> | Date | string
  }, "id">

  export type OtherPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtherPaymentCountOrderByAggregateInput
    _avg?: OtherPaymentAvgOrderByAggregateInput
    _max?: OtherPaymentMaxOrderByAggregateInput
    _min?: OtherPaymentMinOrderByAggregateInput
    _sum?: OtherPaymentSumOrderByAggregateInput
  }

  export type OtherPaymentScalarWhereWithAggregatesInput = {
    AND?: OtherPaymentScalarWhereWithAggregatesInput | OtherPaymentScalarWhereWithAggregatesInput[]
    OR?: OtherPaymentScalarWhereWithAggregatesInput[]
    NOT?: OtherPaymentScalarWhereWithAggregatesInput | OtherPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtherPayment"> | string
    name?: StringWithAggregatesFilter<"OtherPayment"> | string
    amount?: IntWithAggregatesFilter<"OtherPayment"> | number
    month?: StringWithAggregatesFilter<"OtherPayment"> | string
    session?: StringWithAggregatesFilter<"OtherPayment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OtherPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OtherPayment"> | Date | string
  }

  export type HousePaymentWhereInput = {
    AND?: HousePaymentWhereInput | HousePaymentWhereInput[]
    OR?: HousePaymentWhereInput[]
    NOT?: HousePaymentWhereInput | HousePaymentWhereInput[]
    id?: StringFilter<"HousePayment"> | string
    houseName?: StringFilter<"HousePayment"> | string
    session?: StringFilter<"HousePayment"> | string
    month?: StringFilter<"HousePayment"> | string
    amount?: IntFilter<"HousePayment"> | number
    method?: StringFilter<"HousePayment"> | string
    paymentStatus?: StringFilter<"HousePayment"> | string
    houseId?: StringFilter<"HousePayment"> | string
    createdAt?: DateTimeFilter<"HousePayment"> | Date | string
    updatedAt?: DateTimeFilter<"HousePayment"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }

  export type HousePaymentOrderByWithRelationInput = {
    id?: SortOrder
    houseName?: SortOrder
    session?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    house?: HouseOrderByWithRelationInput
  }

  export type HousePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HousePaymentWhereInput | HousePaymentWhereInput[]
    OR?: HousePaymentWhereInput[]
    NOT?: HousePaymentWhereInput | HousePaymentWhereInput[]
    houseName?: StringFilter<"HousePayment"> | string
    session?: StringFilter<"HousePayment"> | string
    month?: StringFilter<"HousePayment"> | string
    amount?: IntFilter<"HousePayment"> | number
    method?: StringFilter<"HousePayment"> | string
    paymentStatus?: StringFilter<"HousePayment"> | string
    houseId?: StringFilter<"HousePayment"> | string
    createdAt?: DateTimeFilter<"HousePayment"> | Date | string
    updatedAt?: DateTimeFilter<"HousePayment"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }, "id">

  export type HousePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    houseName?: SortOrder
    session?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HousePaymentCountOrderByAggregateInput
    _avg?: HousePaymentAvgOrderByAggregateInput
    _max?: HousePaymentMaxOrderByAggregateInput
    _min?: HousePaymentMinOrderByAggregateInput
    _sum?: HousePaymentSumOrderByAggregateInput
  }

  export type HousePaymentScalarWhereWithAggregatesInput = {
    AND?: HousePaymentScalarWhereWithAggregatesInput | HousePaymentScalarWhereWithAggregatesInput[]
    OR?: HousePaymentScalarWhereWithAggregatesInput[]
    NOT?: HousePaymentScalarWhereWithAggregatesInput | HousePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HousePayment"> | string
    houseName?: StringWithAggregatesFilter<"HousePayment"> | string
    session?: StringWithAggregatesFilter<"HousePayment"> | string
    month?: StringWithAggregatesFilter<"HousePayment"> | string
    amount?: IntWithAggregatesFilter<"HousePayment"> | number
    method?: StringWithAggregatesFilter<"HousePayment"> | string
    paymentStatus?: StringWithAggregatesFilter<"HousePayment"> | string
    houseId?: StringWithAggregatesFilter<"HousePayment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HousePayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HousePayment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    avatar?: string | null
    role?: string
    status?: string
    phone?: string | null
    referalCode: string
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    avatar?: string | null
    role?: string
    status?: string
    phone?: string | null
    referalCode: string
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    referalCode?: StringFieldUpdateOperationsInput | string
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    referalCode?: StringFieldUpdateOperationsInput | string
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    avatar?: string | null
    role?: string
    status?: string
    phone?: string | null
    referalCode: string
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    referalCode?: StringFieldUpdateOperationsInput | string
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    referalCode?: StringFieldUpdateOperationsInput | string
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseCreateInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHouseInput
    payments?: HousePaymentCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
    payments?: HousePaymentUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHouseNestedInput
    payments?: HousePaymentUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
    payments?: HousePaymentUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseCreateManyInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    house: HouseCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    houseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    houseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    houseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    houseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterCreateInput = {
    id?: string
    name: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounterUncheckedCreateInput = {
    id?: string
    name: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterCreateManyInput = {
    id?: string
    name: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionPayments?: AdmissionPaymentCreateNestedManyWithoutStudentInput
    salaryPayments?: SalaryPaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionPayments?: AdmissionPaymentUncheckedCreateNestedManyWithoutStudentInput
    salaryPayments?: SalaryPaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionPayments?: AdmissionPaymentUpdateManyWithoutStudentNestedInput
    salaryPayments?: SalaryPaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionPayments?: AdmissionPaymentUncheckedUpdateManyWithoutStudentNestedInput
    salaryPayments?: SalaryPaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionFeeCreateInput = {
    id?: string
    className: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionFeeUncheckedCreateInput = {
    id?: string
    className: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionFeeUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionFeeUncheckedUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionFeeCreateManyInput = {
    id?: string
    className: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionFeeUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionFeeUncheckedUpdateManyInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFeeCreateInput = {
    id?: string
    className: string
    group?: string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryFeeUncheckedCreateInput = {
    id?: string
    className: string
    group?: string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryFeeUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFeeUncheckedUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFeeCreateManyInput = {
    id?: string
    className: string
    group?: string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryFeeUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFeeUncheckedUpdateManyInput = {
    className?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentCreateInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAdmissionPaymentsInput
  }

  export type AdmissionPaymentUncheckedCreateInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionPaymentUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAdmissionPaymentsNestedInput
  }

  export type AdmissionPaymentUncheckedUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentCreateManyInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionPaymentUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentUncheckedUpdateManyInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentCreateInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSalaryPaymentsInput
  }

  export type SalaryPaymentUncheckedCreateInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryPaymentUpdateInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSalaryPaymentsNestedInput
  }

  export type SalaryPaymentUncheckedUpdateInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentCreateManyInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryPaymentUpdateManyMutationInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentUncheckedUpdateManyInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherPaymentCreateInput = {
    id?: string
    name: string
    amount: number
    month: string
    session: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherPaymentUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    month: string
    session: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherPaymentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherPaymentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherPaymentCreateManyInput = {
    id?: string
    name: string
    amount: number
    month: string
    session: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherPaymentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherPaymentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentCreateInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    house: HouseCreateNestedOneWithoutPaymentsInput
  }

  export type HousePaymentUncheckedCreateInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    houseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HousePaymentUpdateInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type HousePaymentUncheckedUpdateInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    houseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentCreateManyInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    houseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HousePaymentUpdateManyMutationInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentUncheckedUpdateManyInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    houseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    referalCode?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    referalCode?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    referalCode?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type HousePaymentListRelationFilter = {
    every?: HousePaymentWhereInput
    some?: HousePaymentWhereInput
    none?: HousePaymentWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HousePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseAvgOrderByAggregateInput = {
    roomCount?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseSumOrderByAggregateInput = {
    roomCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HouseScalarRelationFilter = {
    is?: HouseWhereInput
    isNot?: HouseWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    availableTimes?: SortOrder
    bookTimes?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type CounterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounterAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CounterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounterSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AdmissionPaymentListRelationFilter = {
    every?: AdmissionPaymentWhereInput
    some?: AdmissionPaymentWhereInput
    none?: AdmissionPaymentWhereInput
  }

  export type SalaryPaymentListRelationFilter = {
    every?: SalaryPaymentWhereInput
    some?: SalaryPaymentWhereInput
    none?: SalaryPaymentWhereInput
  }

  export type AdmissionPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    nameBangla?: SortOrder
    fName?: SortOrder
    mName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    religion?: SortOrder
    imageUrl?: SortOrder
    school?: SortOrder
    className?: SortOrder
    section?: SortOrder
    shift?: SortOrder
    group?: SortOrder
    roll?: SortOrder
    fPhone?: SortOrder
    mPhone?: SortOrder
    presentHouseNo?: SortOrder
    presentMoholla?: SortOrder
    presentPost?: SortOrder
    presentThana?: SortOrder
    permanentVillage?: SortOrder
    permanentPost?: SortOrder
    permanentThana?: SortOrder
    permanentDistrict?: SortOrder
    isPresent?: SortOrder
    leftReason?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    studentId?: SortOrder
    roll?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    nameBangla?: SortOrder
    fName?: SortOrder
    mName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    religion?: SortOrder
    imageUrl?: SortOrder
    school?: SortOrder
    className?: SortOrder
    section?: SortOrder
    shift?: SortOrder
    group?: SortOrder
    roll?: SortOrder
    fPhone?: SortOrder
    mPhone?: SortOrder
    presentHouseNo?: SortOrder
    presentMoholla?: SortOrder
    presentPost?: SortOrder
    presentThana?: SortOrder
    permanentVillage?: SortOrder
    permanentPost?: SortOrder
    permanentThana?: SortOrder
    permanentDistrict?: SortOrder
    isPresent?: SortOrder
    leftReason?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    nameBangla?: SortOrder
    fName?: SortOrder
    mName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    religion?: SortOrder
    imageUrl?: SortOrder
    school?: SortOrder
    className?: SortOrder
    section?: SortOrder
    shift?: SortOrder
    group?: SortOrder
    roll?: SortOrder
    fPhone?: SortOrder
    mPhone?: SortOrder
    presentHouseNo?: SortOrder
    presentMoholla?: SortOrder
    presentPost?: SortOrder
    presentThana?: SortOrder
    permanentVillage?: SortOrder
    permanentPost?: SortOrder
    permanentThana?: SortOrder
    permanentDistrict?: SortOrder
    isPresent?: SortOrder
    leftReason?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    studentId?: SortOrder
    roll?: SortOrder
    admissionFee?: SortOrder
    salaryFee?: SortOrder
  }

  export type AdmissionFeeCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionFeeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AdmissionFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionFeeMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionFeeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalaryFeeCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    group?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryFeeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalaryFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    group?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryFeeMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    group?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryFeeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AdmissionPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    session?: SortOrder
    month?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AdmissionPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    session?: SortOrder
    month?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    session?: SortOrder
    month?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SalaryPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    session?: SortOrder
    month?: SortOrder
    className?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    note?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalaryPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    session?: SortOrder
    month?: SortOrder
    className?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    note?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    session?: SortOrder
    month?: SortOrder
    className?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    note?: SortOrder
    paidAt?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OtherPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OtherPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type HousePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    houseName?: SortOrder
    session?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HousePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type HousePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    houseName?: SortOrder
    session?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HousePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    houseName?: SortOrder
    session?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HousePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomCreateNestedManyWithoutHouseInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type HousePaymentCreateNestedManyWithoutHouseInput = {
    create?: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput> | HousePaymentCreateWithoutHouseInput[] | HousePaymentUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HousePaymentCreateOrConnectWithoutHouseInput | HousePaymentCreateOrConnectWithoutHouseInput[]
    createMany?: HousePaymentCreateManyHouseInputEnvelope
    connect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type HousePaymentUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput> | HousePaymentCreateWithoutHouseInput[] | HousePaymentUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HousePaymentCreateOrConnectWithoutHouseInput | HousePaymentCreateOrConnectWithoutHouseInput[]
    createMany?: HousePaymentCreateManyHouseInputEnvelope
    connect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateManyWithoutHouseNestedInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHouseInput | RoomUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHouseInput | RoomUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHouseInput | RoomUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type HousePaymentUpdateManyWithoutHouseNestedInput = {
    create?: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput> | HousePaymentCreateWithoutHouseInput[] | HousePaymentUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HousePaymentCreateOrConnectWithoutHouseInput | HousePaymentCreateOrConnectWithoutHouseInput[]
    upsert?: HousePaymentUpsertWithWhereUniqueWithoutHouseInput | HousePaymentUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: HousePaymentCreateManyHouseInputEnvelope
    set?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    disconnect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    delete?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    connect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    update?: HousePaymentUpdateWithWhereUniqueWithoutHouseInput | HousePaymentUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: HousePaymentUpdateManyWithWhereWithoutHouseInput | HousePaymentUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: HousePaymentScalarWhereInput | HousePaymentScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHouseInput | RoomUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHouseInput | RoomUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHouseInput | RoomUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type HousePaymentUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput> | HousePaymentCreateWithoutHouseInput[] | HousePaymentUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HousePaymentCreateOrConnectWithoutHouseInput | HousePaymentCreateOrConnectWithoutHouseInput[]
    upsert?: HousePaymentUpsertWithWhereUniqueWithoutHouseInput | HousePaymentUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: HousePaymentCreateManyHouseInputEnvelope
    set?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    disconnect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    delete?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    connect?: HousePaymentWhereUniqueInput | HousePaymentWhereUniqueInput[]
    update?: HousePaymentUpdateWithWhereUniqueWithoutHouseInput | HousePaymentUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: HousePaymentUpdateManyWithWhereWithoutHouseInput | HousePaymentUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: HousePaymentScalarWhereInput | HousePaymentScalarWhereInput[]
  }

  export type RoomCreateavailableTimesInput = {
    set: string[]
  }

  export type RoomCreatebookTimesInput = {
    set: string[]
  }

  export type HouseCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomsInput
    connect?: HouseWhereUniqueInput
  }

  export type RoomUpdateavailableTimesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RoomUpdatebookTimesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type HouseUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomsInput
    upsert?: HouseUpsertWithoutRoomsInput
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutRoomsInput, HouseUpdateWithoutRoomsInput>, HouseUncheckedUpdateWithoutRoomsInput>
  }

  export type AdmissionPaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput> | AdmissionPaymentCreateWithoutStudentInput[] | AdmissionPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AdmissionPaymentCreateOrConnectWithoutStudentInput | AdmissionPaymentCreateOrConnectWithoutStudentInput[]
    createMany?: AdmissionPaymentCreateManyStudentInputEnvelope
    connect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
  }

  export type SalaryPaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput> | SalaryPaymentCreateWithoutStudentInput[] | SalaryPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SalaryPaymentCreateOrConnectWithoutStudentInput | SalaryPaymentCreateOrConnectWithoutStudentInput[]
    createMany?: SalaryPaymentCreateManyStudentInputEnvelope
    connect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
  }

  export type AdmissionPaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput> | AdmissionPaymentCreateWithoutStudentInput[] | AdmissionPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AdmissionPaymentCreateOrConnectWithoutStudentInput | AdmissionPaymentCreateOrConnectWithoutStudentInput[]
    createMany?: AdmissionPaymentCreateManyStudentInputEnvelope
    connect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
  }

  export type SalaryPaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput> | SalaryPaymentCreateWithoutStudentInput[] | SalaryPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SalaryPaymentCreateOrConnectWithoutStudentInput | SalaryPaymentCreateOrConnectWithoutStudentInput[]
    createMany?: SalaryPaymentCreateManyStudentInputEnvelope
    connect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
  }

  export type AdmissionPaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput> | AdmissionPaymentCreateWithoutStudentInput[] | AdmissionPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AdmissionPaymentCreateOrConnectWithoutStudentInput | AdmissionPaymentCreateOrConnectWithoutStudentInput[]
    upsert?: AdmissionPaymentUpsertWithWhereUniqueWithoutStudentInput | AdmissionPaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AdmissionPaymentCreateManyStudentInputEnvelope
    set?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    disconnect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    delete?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    connect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    update?: AdmissionPaymentUpdateWithWhereUniqueWithoutStudentInput | AdmissionPaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AdmissionPaymentUpdateManyWithWhereWithoutStudentInput | AdmissionPaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AdmissionPaymentScalarWhereInput | AdmissionPaymentScalarWhereInput[]
  }

  export type SalaryPaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput> | SalaryPaymentCreateWithoutStudentInput[] | SalaryPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SalaryPaymentCreateOrConnectWithoutStudentInput | SalaryPaymentCreateOrConnectWithoutStudentInput[]
    upsert?: SalaryPaymentUpsertWithWhereUniqueWithoutStudentInput | SalaryPaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SalaryPaymentCreateManyStudentInputEnvelope
    set?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    disconnect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    delete?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    connect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    update?: SalaryPaymentUpdateWithWhereUniqueWithoutStudentInput | SalaryPaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SalaryPaymentUpdateManyWithWhereWithoutStudentInput | SalaryPaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SalaryPaymentScalarWhereInput | SalaryPaymentScalarWhereInput[]
  }

  export type AdmissionPaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput> | AdmissionPaymentCreateWithoutStudentInput[] | AdmissionPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AdmissionPaymentCreateOrConnectWithoutStudentInput | AdmissionPaymentCreateOrConnectWithoutStudentInput[]
    upsert?: AdmissionPaymentUpsertWithWhereUniqueWithoutStudentInput | AdmissionPaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AdmissionPaymentCreateManyStudentInputEnvelope
    set?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    disconnect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    delete?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    connect?: AdmissionPaymentWhereUniqueInput | AdmissionPaymentWhereUniqueInput[]
    update?: AdmissionPaymentUpdateWithWhereUniqueWithoutStudentInput | AdmissionPaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AdmissionPaymentUpdateManyWithWhereWithoutStudentInput | AdmissionPaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AdmissionPaymentScalarWhereInput | AdmissionPaymentScalarWhereInput[]
  }

  export type SalaryPaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput> | SalaryPaymentCreateWithoutStudentInput[] | SalaryPaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SalaryPaymentCreateOrConnectWithoutStudentInput | SalaryPaymentCreateOrConnectWithoutStudentInput[]
    upsert?: SalaryPaymentUpsertWithWhereUniqueWithoutStudentInput | SalaryPaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SalaryPaymentCreateManyStudentInputEnvelope
    set?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    disconnect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    delete?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    connect?: SalaryPaymentWhereUniqueInput | SalaryPaymentWhereUniqueInput[]
    update?: SalaryPaymentUpdateWithWhereUniqueWithoutStudentInput | SalaryPaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SalaryPaymentUpdateManyWithWhereWithoutStudentInput | SalaryPaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SalaryPaymentScalarWhereInput | SalaryPaymentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAdmissionPaymentsInput = {
    create?: XOR<StudentCreateWithoutAdmissionPaymentsInput, StudentUncheckedCreateWithoutAdmissionPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAdmissionPaymentsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type StudentUpdateOneRequiredWithoutAdmissionPaymentsNestedInput = {
    create?: XOR<StudentCreateWithoutAdmissionPaymentsInput, StudentUncheckedCreateWithoutAdmissionPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAdmissionPaymentsInput
    upsert?: StudentUpsertWithoutAdmissionPaymentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAdmissionPaymentsInput, StudentUpdateWithoutAdmissionPaymentsInput>, StudentUncheckedUpdateWithoutAdmissionPaymentsInput>
  }

  export type StudentCreateNestedOneWithoutSalaryPaymentsInput = {
    create?: XOR<StudentCreateWithoutSalaryPaymentsInput, StudentUncheckedCreateWithoutSalaryPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSalaryPaymentsInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSalaryPaymentsNestedInput = {
    create?: XOR<StudentCreateWithoutSalaryPaymentsInput, StudentUncheckedCreateWithoutSalaryPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSalaryPaymentsInput
    upsert?: StudentUpsertWithoutSalaryPaymentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSalaryPaymentsInput, StudentUpdateWithoutSalaryPaymentsInput>, StudentUncheckedUpdateWithoutSalaryPaymentsInput>
  }

  export type HouseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<HouseCreateWithoutPaymentsInput, HouseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutPaymentsInput
    connect?: HouseWhereUniqueInput
  }

  export type HouseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<HouseCreateWithoutPaymentsInput, HouseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutPaymentsInput
    upsert?: HouseUpsertWithoutPaymentsInput
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutPaymentsInput, HouseUpdateWithoutPaymentsInput>, HouseUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type RoomCreateWithoutHouseInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutHouseInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutHouseInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomCreateManyHouseInputEnvelope = {
    data: RoomCreateManyHouseInput | RoomCreateManyHouseInput[]
  }

  export type HousePaymentCreateWithoutHouseInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HousePaymentUncheckedCreateWithoutHouseInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HousePaymentCreateOrConnectWithoutHouseInput = {
    where: HousePaymentWhereUniqueInput
    create: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput>
  }

  export type HousePaymentCreateManyHouseInputEnvelope = {
    data: HousePaymentCreateManyHouseInput | HousePaymentCreateManyHouseInput[]
  }

  export type RoomUpsertWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
  }

  export type RoomUpdateManyWithWhereWithoutHouseInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHouseInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    availableTimes?: StringNullableListFilter<"Room">
    bookTimes?: StringNullableListFilter<"Room">
    houseId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type HousePaymentUpsertWithWhereUniqueWithoutHouseInput = {
    where: HousePaymentWhereUniqueInput
    update: XOR<HousePaymentUpdateWithoutHouseInput, HousePaymentUncheckedUpdateWithoutHouseInput>
    create: XOR<HousePaymentCreateWithoutHouseInput, HousePaymentUncheckedCreateWithoutHouseInput>
  }

  export type HousePaymentUpdateWithWhereUniqueWithoutHouseInput = {
    where: HousePaymentWhereUniqueInput
    data: XOR<HousePaymentUpdateWithoutHouseInput, HousePaymentUncheckedUpdateWithoutHouseInput>
  }

  export type HousePaymentUpdateManyWithWhereWithoutHouseInput = {
    where: HousePaymentScalarWhereInput
    data: XOR<HousePaymentUpdateManyMutationInput, HousePaymentUncheckedUpdateManyWithoutHouseInput>
  }

  export type HousePaymentScalarWhereInput = {
    AND?: HousePaymentScalarWhereInput | HousePaymentScalarWhereInput[]
    OR?: HousePaymentScalarWhereInput[]
    NOT?: HousePaymentScalarWhereInput | HousePaymentScalarWhereInput[]
    id?: StringFilter<"HousePayment"> | string
    houseName?: StringFilter<"HousePayment"> | string
    session?: StringFilter<"HousePayment"> | string
    month?: StringFilter<"HousePayment"> | string
    amount?: IntFilter<"HousePayment"> | number
    method?: StringFilter<"HousePayment"> | string
    paymentStatus?: StringFilter<"HousePayment"> | string
    houseId?: StringFilter<"HousePayment"> | string
    createdAt?: DateTimeFilter<"HousePayment"> | Date | string
    updatedAt?: DateTimeFilter<"HousePayment"> | Date | string
  }

  export type HouseCreateWithoutRoomsInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: HousePaymentCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: HousePaymentUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutRoomsInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
  }

  export type HouseUpsertWithoutRoomsInput = {
    update: XOR<HouseUpdateWithoutRoomsInput, HouseUncheckedUpdateWithoutRoomsInput>
    create: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutRoomsInput, HouseUncheckedUpdateWithoutRoomsInput>
  }

  export type HouseUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: HousePaymentUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: HousePaymentUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type AdmissionPaymentCreateWithoutStudentInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionPaymentUncheckedCreateWithoutStudentInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionPaymentCreateOrConnectWithoutStudentInput = {
    where: AdmissionPaymentWhereUniqueInput
    create: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput>
  }

  export type AdmissionPaymentCreateManyStudentInputEnvelope = {
    data: AdmissionPaymentCreateManyStudentInput | AdmissionPaymentCreateManyStudentInput[]
  }

  export type SalaryPaymentCreateWithoutStudentInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryPaymentUncheckedCreateWithoutStudentInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryPaymentCreateOrConnectWithoutStudentInput = {
    where: SalaryPaymentWhereUniqueInput
    create: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput>
  }

  export type SalaryPaymentCreateManyStudentInputEnvelope = {
    data: SalaryPaymentCreateManyStudentInput | SalaryPaymentCreateManyStudentInput[]
  }

  export type AdmissionPaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: AdmissionPaymentWhereUniqueInput
    update: XOR<AdmissionPaymentUpdateWithoutStudentInput, AdmissionPaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<AdmissionPaymentCreateWithoutStudentInput, AdmissionPaymentUncheckedCreateWithoutStudentInput>
  }

  export type AdmissionPaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: AdmissionPaymentWhereUniqueInput
    data: XOR<AdmissionPaymentUpdateWithoutStudentInput, AdmissionPaymentUncheckedUpdateWithoutStudentInput>
  }

  export type AdmissionPaymentUpdateManyWithWhereWithoutStudentInput = {
    where: AdmissionPaymentScalarWhereInput
    data: XOR<AdmissionPaymentUpdateManyMutationInput, AdmissionPaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type AdmissionPaymentScalarWhereInput = {
    AND?: AdmissionPaymentScalarWhereInput | AdmissionPaymentScalarWhereInput[]
    OR?: AdmissionPaymentScalarWhereInput[]
    NOT?: AdmissionPaymentScalarWhereInput | AdmissionPaymentScalarWhereInput[]
    id?: StringFilter<"AdmissionPayment"> | string
    className?: StringFilter<"AdmissionPayment"> | string
    amount?: IntFilter<"AdmissionPayment"> | number
    method?: StringFilter<"AdmissionPayment"> | string
    status?: StringFilter<"AdmissionPayment"> | string
    paymentStatus?: StringFilter<"AdmissionPayment"> | string
    session?: StringFilter<"AdmissionPayment"> | string
    month?: StringFilter<"AdmissionPayment"> | string
    paidAt?: DateTimeNullableFilter<"AdmissionPayment"> | Date | string | null
    studentId?: StringFilter<"AdmissionPayment"> | string
    createdAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionPayment"> | Date | string
  }

  export type SalaryPaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: SalaryPaymentWhereUniqueInput
    update: XOR<SalaryPaymentUpdateWithoutStudentInput, SalaryPaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<SalaryPaymentCreateWithoutStudentInput, SalaryPaymentUncheckedCreateWithoutStudentInput>
  }

  export type SalaryPaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: SalaryPaymentWhereUniqueInput
    data: XOR<SalaryPaymentUpdateWithoutStudentInput, SalaryPaymentUncheckedUpdateWithoutStudentInput>
  }

  export type SalaryPaymentUpdateManyWithWhereWithoutStudentInput = {
    where: SalaryPaymentScalarWhereInput
    data: XOR<SalaryPaymentUpdateManyMutationInput, SalaryPaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type SalaryPaymentScalarWhereInput = {
    AND?: SalaryPaymentScalarWhereInput | SalaryPaymentScalarWhereInput[]
    OR?: SalaryPaymentScalarWhereInput[]
    NOT?: SalaryPaymentScalarWhereInput | SalaryPaymentScalarWhereInput[]
    id?: StringFilter<"SalaryPayment"> | string
    transactionId?: StringNullableFilter<"SalaryPayment"> | string | null
    amount?: IntFilter<"SalaryPayment"> | number
    session?: StringFilter<"SalaryPayment"> | string
    month?: StringFilter<"SalaryPayment"> | string
    className?: StringFilter<"SalaryPayment"> | string
    method?: StringNullableFilter<"SalaryPayment"> | string | null
    status?: StringFilter<"SalaryPayment"> | string
    paymentStatus?: StringFilter<"SalaryPayment"> | string
    note?: StringNullableFilter<"SalaryPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"SalaryPayment"> | Date | string | null
    studentId?: StringFilter<"SalaryPayment"> | string
    createdAt?: DateTimeFilter<"SalaryPayment"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryPayment"> | Date | string
  }

  export type StudentCreateWithoutAdmissionPaymentsInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salaryPayments?: SalaryPaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAdmissionPaymentsInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salaryPayments?: SalaryPaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAdmissionPaymentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAdmissionPaymentsInput, StudentUncheckedCreateWithoutAdmissionPaymentsInput>
  }

  export type StudentUpsertWithoutAdmissionPaymentsInput = {
    update: XOR<StudentUpdateWithoutAdmissionPaymentsInput, StudentUncheckedUpdateWithoutAdmissionPaymentsInput>
    create: XOR<StudentCreateWithoutAdmissionPaymentsInput, StudentUncheckedCreateWithoutAdmissionPaymentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAdmissionPaymentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAdmissionPaymentsInput, StudentUncheckedUpdateWithoutAdmissionPaymentsInput>
  }

  export type StudentUpdateWithoutAdmissionPaymentsInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salaryPayments?: SalaryPaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAdmissionPaymentsInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salaryPayments?: SalaryPaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutSalaryPaymentsInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionPayments?: AdmissionPaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSalaryPaymentsInput = {
    id?: string
    session: string
    studentId: number
    name: string
    nameBangla: string
    fName: string
    mName: string
    gender: string
    dob: Date | string
    nationality: string
    religion: string
    imageUrl?: string | null
    school: string
    className: string
    section?: string | null
    shift?: string | null
    group?: string | null
    roll: number
    fPhone: string
    mPhone: string
    presentHouseNo: string
    presentMoholla: string
    presentPost: string
    presentThana: string
    permanentVillage: string
    permanentPost: string
    permanentThana: string
    permanentDistrict: string
    isPresent?: boolean
    leftReason?: string | null
    admissionFee: number
    salaryFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionPayments?: AdmissionPaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSalaryPaymentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSalaryPaymentsInput, StudentUncheckedCreateWithoutSalaryPaymentsInput>
  }

  export type StudentUpsertWithoutSalaryPaymentsInput = {
    update: XOR<StudentUpdateWithoutSalaryPaymentsInput, StudentUncheckedUpdateWithoutSalaryPaymentsInput>
    create: XOR<StudentCreateWithoutSalaryPaymentsInput, StudentUncheckedCreateWithoutSalaryPaymentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSalaryPaymentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSalaryPaymentsInput, StudentUncheckedUpdateWithoutSalaryPaymentsInput>
  }

  export type StudentUpdateWithoutSalaryPaymentsInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionPayments?: AdmissionPaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSalaryPaymentsInput = {
    session?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameBangla?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    mName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: IntFieldUpdateOperationsInput | number
    fPhone?: StringFieldUpdateOperationsInput | string
    mPhone?: StringFieldUpdateOperationsInput | string
    presentHouseNo?: StringFieldUpdateOperationsInput | string
    presentMoholla?: StringFieldUpdateOperationsInput | string
    presentPost?: StringFieldUpdateOperationsInput | string
    presentThana?: StringFieldUpdateOperationsInput | string
    permanentVillage?: StringFieldUpdateOperationsInput | string
    permanentPost?: StringFieldUpdateOperationsInput | string
    permanentThana?: StringFieldUpdateOperationsInput | string
    permanentDistrict?: StringFieldUpdateOperationsInput | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    leftReason?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: IntFieldUpdateOperationsInput | number
    salaryFee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionPayments?: AdmissionPaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type HouseCreateWithoutPaymentsInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutPaymentsInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutPaymentsInput, HouseUncheckedCreateWithoutPaymentsInput>
  }

  export type HouseUpsertWithoutPaymentsInput = {
    update: XOR<HouseUpdateWithoutPaymentsInput, HouseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<HouseCreateWithoutPaymentsInput, HouseUncheckedCreateWithoutPaymentsInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutPaymentsInput, HouseUncheckedUpdateWithoutPaymentsInput>
  }

  export type HouseUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type RoomCreateManyHouseInput = {
    id?: string
    name: string
    capacity: number
    availableTimes?: RoomCreateavailableTimesInput | string[]
    bookTimes?: RoomCreatebookTimesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HousePaymentCreateManyHouseInput = {
    id?: string
    houseName: string
    session: string
    month: string
    amount: number
    method: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutHouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutHouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyWithoutHouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    availableTimes?: RoomUpdateavailableTimesInput | string[]
    bookTimes?: RoomUpdatebookTimesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentUpdateWithoutHouseInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentUncheckedUpdateWithoutHouseInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousePaymentUncheckedUpdateManyWithoutHouseInput = {
    houseName?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentCreateManyStudentInput = {
    id?: string
    className: string
    amount: number
    method: string
    status: string
    paymentStatus?: string
    session: string
    month: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryPaymentCreateManyStudentInput = {
    id?: string
    transactionId?: string | null
    amount: number
    session: string
    month: string
    className: string
    method?: string | null
    status: string
    paymentStatus?: string
    note?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionPaymentUpdateWithoutStudentInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentUncheckedUpdateWithoutStudentInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionPaymentUncheckedUpdateManyWithoutStudentInput = {
    className?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentUpdateWithoutStudentInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentUncheckedUpdateWithoutStudentInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryPaymentUncheckedUpdateManyWithoutStudentInput = {
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}