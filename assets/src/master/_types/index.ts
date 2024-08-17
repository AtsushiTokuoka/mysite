// ModalId型の定義
type ModalId = "user-add" | "video-upload" | "video-edit" | "";

// リクエストパラメータの型定義
interface RequestParams {
  user: UserParams;
  video: VideoParams;
}
interface UserParams {
  id: number;
}
interface VideoParams {
  id: number;
}

// 各リソースのmodel
interface ResourceModels {
  users: UserModel[];
  videos: VideoModel[];
  photos: PhotoModel[];
  articles: ArticleModel[];
}
// ResourceTypesの定義
type ResourceTypes = keyof ResourceModels;

// modelの定義
interface UserModel {
  id: number;
  name: string;
  password: string;
}
interface VideoModel {
  id: number;
}
interface PhotoModel {
  id: number;
}
interface ArticleModel {
  id: number;
}

export { ResourceTypes, ResourceModels, RequestParams, ModalId };
