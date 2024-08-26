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
interface Request {
  resourceKey: ResourceKeys;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  headers: {
    "Content-Type": "application/json";
  };
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
  Request,
  Response,
  ModalId,
  ResourceGuard,
};
