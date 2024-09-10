// models
import { User, isUser } from "@/master/_types/models/User";
import { Video, isVideo } from "@/master/_types/models/Video";
import { Photo, isPhoto } from "@/master/_types/models/Photo";
import { Article, isArticle } from "@/master/_types/models/Article";

// Resource名の定義
type ResourceKeys = keyof ResourceModels;

interface ResourceModels {
  users: User[];
  videos: Video[];
  photos: Photo[];
  articles: Article[];
}
const ResourceModels = {
  users: isUser,
  videos: isVideo,
  photos: isPhoto,
  articles: isArticle,
};
function ResourceGuard(resourceKey: ResourceKeys) {
  return ResourceModels[resourceKey];
}

// request
type RequestParams =
  | {
      method: "GET" | "HEAD";
      path?: string;
      body?: never;
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
      path?: string;
      body?: object;
    };
interface Request {
  headers: {
    "Content-Type": "application/json";
  };
  resourceKey: ResourceKeys;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  path?: string;
  body?: object;
}

// response
type Response<K extends ResourceKeys> = ResourceModels[K];

// ModalId型の定義
type ModalId = "user-add" | "video-upload" | "video-edit" | "";

export {
  ResourceModels,
  ResourceKeys,
  RequestParams,
  Request,
  Response,
  ModalId,
  ResourceGuard,
};
