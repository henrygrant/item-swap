/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
  Groups = "groups",
  Posts = "posts",
  Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;

// System fields
export type BaseSystemFields = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: { [key: string]: any };
};

export type AuthSystemFields = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields;

// Record types for each collection

export type GroupsRecord = {
  name?: string;
};

export type PostsRecord = {
  title: string;
  description?: string;
  price: number;
  user: RecordIdString;
};

export type UsersRecord = {
  name?: string;
  avatar?: string;
  groups?: RecordIdString;
};

// Response types include system fields and match responses from the PocketBase API
export type GroupsResponse = GroupsRecord & BaseSystemFields;
export type PostsResponse = PostsRecord & BaseSystemFields;
export type UsersResponse = UsersRecord & AuthSystemFields;

export type CollectionRecords = {
  groups: GroupsRecord;
  posts: PostsRecord;
  users: UsersRecord;
};
