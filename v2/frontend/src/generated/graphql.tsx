import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _avg?: Maybe<ProjectAvgAggregate>;
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  _sum?: Maybe<ProjectSumAggregate>;
};

export type AggregateReview = {
  __typename?: 'AggregateReview';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProject: AffectedRowsOutput;
  createManyReview: AffectedRowsOutput;
  createProject: Project;
  createReview: Review;
  deleteManyProject: AffectedRowsOutput;
  deleteManyReview: AffectedRowsOutput;
  deleteProject?: Maybe<Project>;
  deleteReview?: Maybe<Review>;
  updateManyProject: AffectedRowsOutput;
  updateManyReview: AffectedRowsOutput;
  updateProject?: Maybe<Project>;
  updateReview?: Maybe<Review>;
  upsertProject: Project;
  upsertReview: Review;
};


export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyReviewArgs = {
  data: Array<ReviewCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateReviewArgs = {
  description: Scalars['String'];
  projectName: Scalars['String'];
  rating: Scalars['Float'];
};


export type MutationDeleteManyProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: Maybe<ReviewWhereInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: Maybe<ProjectWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: Maybe<ReviewWhereInput>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCount>;
  id: Scalars['Int'];
  name: Scalars['String'];
  reviews: Array<Review>;
};


export type ProjectReviewsArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  distinct?: Maybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: Maybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};

export type ProjectAvgAggregate = {
  __typename?: 'ProjectAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ProjectAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  reviews: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ProjectCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ProjectCreateInput = {
  name: Scalars['String'];
  reviews?: Maybe<ReviewCreateNestedManyWithoutProjectInput>;
};

export type ProjectCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type ProjectCreateNestedOneWithoutReviewsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutReviewsInput>;
  create?: Maybe<ProjectCreateWithoutReviewsInput>;
};

export type ProjectCreateOrConnectWithoutReviewsInput = {
  create: ProjectCreateWithoutReviewsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutReviewsInput = {
  name: Scalars['String'];
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _avg?: Maybe<ProjectAvgAggregate>;
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  _sum?: Maybe<ProjectSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _avg?: Maybe<ProjectAvgOrderByAggregateInput>;
  _count?: Maybe<ProjectCountOrderByAggregateInput>;
  _max?: Maybe<ProjectMaxOrderByAggregateInput>;
  _min?: Maybe<ProjectMinOrderByAggregateInput>;
  _sum?: Maybe<ProjectSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  reviews?: Maybe<ReviewOrderByRelationAggregateInput>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type ProjectSumAggregate = {
  __typename?: 'ProjectSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ProjectUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProjectInput>;
};

export type ProjectUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateOneWithoutReviewsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutReviewsInput>;
  create?: Maybe<ProjectCreateWithoutReviewsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProjectUpdateWithoutReviewsInput>;
  upsert?: Maybe<ProjectUpsertWithoutReviewsInput>;
};

export type ProjectUpdateWithoutReviewsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithoutReviewsInput = {
  create: ProjectCreateWithoutReviewsInput;
  update: ProjectUpdateWithoutReviewsInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  reviews?: Maybe<ReviewListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateProject: AggregateProject;
  aggregateReview: AggregateReview;
  findFirstProject?: Maybe<Project>;
  findFirstReview?: Maybe<Review>;
  groupByProject: Array<ProjectGroupBy>;
  groupByReview: Array<ReviewGroupBy>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
};


export type QueryAggregateProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryAggregateReviewArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QueryFindFirstProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryFindFirstReviewArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  distinct?: Maybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: Maybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having?: Maybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ProjectOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryGroupByReviewArgs = {
  by: Array<ReviewScalarFieldEnum>;
  having?: Maybe<ReviewScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ReviewOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryReviewsArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  distinct?: Maybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: Maybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Review = {
  __typename?: 'Review';
  Project?: Maybe<Project>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  projectId?: Maybe<Scalars['Int']>;
  rating: Scalars['Float'];
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  projectId: Scalars['Int'];
  rating: Scalars['Int'];
};

export type ReviewCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewCreateInput = {
  Project?: Maybe<ProjectCreateNestedOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  rating: Scalars['Float'];
};

export type ReviewCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  rating: Scalars['Float'];
};

export type ReviewCreateManyProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  rating: Scalars['Float'];
};

export type ReviewCreateManyProjectInputEnvelope = {
  data: Array<ReviewCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ReviewCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReviewCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ReviewCreateWithoutProjectInput>>;
  createMany?: Maybe<ReviewCreateManyProjectInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutProjectInput = {
  create: ReviewCreateWithoutProjectInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  rating: Scalars['Float'];
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  projectId?: Maybe<Scalars['Int']>;
  rating: Scalars['Float'];
};

export type ReviewListRelationFilter = {
  every?: Maybe<ReviewWhereInput>;
  none?: Maybe<ReviewWhereInput>;
  some?: Maybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ReviewOrderByWithAggregationInput = {
  _avg?: Maybe<ReviewAvgOrderByAggregateInput>;
  _count?: Maybe<ReviewCountOrderByAggregateInput>;
  _max?: Maybe<ReviewMaxOrderByAggregateInput>;
  _min?: Maybe<ReviewMinOrderByAggregateInput>;
  _sum?: Maybe<ReviewSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  Project?: Maybe<ProjectOrderByWithRelationInput>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export enum ReviewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ProjectId = 'projectId',
  Rating = 'rating'
}

export type ReviewScalarWhereInput = {
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  projectId?: Maybe<IntNullableFilter>;
  rating?: Maybe<FloatFilter>;
};

export type ReviewScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  projectId?: Maybe<IntNullableWithAggregatesFilter>;
  rating?: Maybe<FloatWithAggregatesFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
};

export type ReviewUpdateInput = {
  Project?: Maybe<ProjectUpdateOneWithoutReviewsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutProjectInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReviewCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ReviewCreateWithoutProjectInput>>;
  createMany?: Maybe<ReviewCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutProjectInput = {
  data: ReviewUpdateWithoutProjectInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutProjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutProjectInput = {
  create: ReviewCreateWithoutProjectInput;
  update: ReviewUpdateWithoutProjectInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereInput = {
  AND?: Maybe<Array<ReviewWhereInput>>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  Project?: Maybe<ProjectRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  projectId?: Maybe<IntNullableFilter>;
  rating?: Maybe<FloatFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newReview: Review;
};

export type CreateReviewMutationVariables = Exact<{
  projectName: Scalars['String'];
  description: Scalars['String'];
  rating: Scalars['Float'];
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', description: string, rating: number } };

export type NewReviewSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewReviewSubscription = { __typename?: 'Subscription', newReview: { __typename?: 'Review', rating: number, description: string } };

export type ReviewsQueryVariables = Exact<{
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<Array<ReviewOrderByWithRelationInput> | ReviewOrderByWithRelationInput>;
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', rating: number, description: string }> };

export type ReviewFieldsFragment = { __typename?: 'Review', rating: number, description: string };

export const ReviewFieldsFragmentDoc = gql`
    fragment ReviewFields on Review {
  rating
  description
}
    `;
export const CreateReviewDocument = gql`
    mutation CreateReview($projectName: String!, $description: String!, $rating: Float!) {
  createReview(
    projectName: $projectName
    description: $description
    rating: $rating
  ) {
    description
    rating
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      projectName: // value for 'projectName'
 *      description: // value for 'description'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const NewReviewDocument = gql`
    subscription NewReview {
  newReview {
    rating
    description
  }
}
    `;

/**
 * __useNewReviewSubscription__
 *
 * To run a query within a React component, call `useNewReviewSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewReviewSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewReviewSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewReviewSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewReviewSubscription, NewReviewSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewReviewSubscription, NewReviewSubscriptionVariables>(NewReviewDocument, options);
      }
export type NewReviewSubscriptionHookResult = ReturnType<typeof useNewReviewSubscription>;
export type NewReviewSubscriptionResult = Apollo.SubscriptionResult<NewReviewSubscription>;
export const ReviewsDocument = gql`
    query Reviews($where: ReviewWhereInput, $orderBy: [ReviewOrderByWithRelationInput!]) {
  reviews(where: $where, orderBy: $orderBy) {
    ...ReviewFields
  }
}
    ${ReviewFieldsFragmentDoc}`;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;