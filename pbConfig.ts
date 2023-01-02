import PocketBase from "pocketbase";
import { QueryClient } from "react-query";
import { PostsResponse, UsersResponse, GroupsResponse } from "./types";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const realTime = async (index: [string], queryClient: QueryClient) => {
  return await pb.realtime.subscribe("users", function (e) {
    console.log("real time users", e.record);
  });
};

export const allUsers = async (): Promise<UsersResponse[]> => {
  // const authData = await pb.admins.authWithPassword(
  //   "hgrant94@gmail.com",
  //   ""
  // );
  return await pb.collection("users").getFullList(200 /* batch size */, {
    sort: "-created",
  });
};

export const currentUser = async (userId: string): Promise<UsersResponse> => {
  // const authData = await pb.admins.authWithPassword(
  //   "",
  //   ""
  // );
  return await pb.collection("users").getFirstListItem(`id="${userId}"`, {});
};

export const allGroups = async (): Promise<GroupsResponse[]> => {
  // const authData = await pb.admins.authWithPassword(
  //   "",
  //   ""
  // );
  return await pb.collection("groups").getFullList(200 /* batch size */, {
    sort: "-created",
  });
};

export const allPosts = async (): Promise<PostsResponse[]> => {
  // const authData = await pb.admins.authWithPassword(
  //   "",
  //   ""
  // );
  // console.log(authData);
  pb.authStore.clear();
  // console.log(pb.authStore.isValid);
  // console.log(pb.authStore.token);
  // console.log(pb.authStore.model.id);
  return await pb.collection("posts").getFullList(200 /* batch size */, {
    sort: "-created",
    expand: "user",
  });
};
