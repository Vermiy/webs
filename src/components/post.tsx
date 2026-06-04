import { FaHeart, FaComment } from "react-icons/fa";
import type IPost from "../types/Post";

type ViewMode = "rows" | "tiles";

export default function Post(post: IPost & { view?: ViewMode }) {
    const isRow = post.view !== "tiles";

    return (
        <div
            className={`bg-white  shadow overflow-hidden ${isRow ? "flex flex-col md:flex-row" : "flex flex-col"
                }`}
        >
            <img
                src={post.image_url}
                alt="post"
                className={
                    isRow
                        ? "w-full h-48 object-cover md:w-48 md:h-32 shrink-0"
                        : "w-full h-48 object-cover"
                }
            />

            <div className="flex-1 p-4">
                {isRow ? (
                    <div className="flex flex-col md:flex-row text-sm text-gray-600 gap-4">
                        <div className="flex-1">
                            <span className="font-bold">Today</span>

                            <div className="flex items-center gap-4 mt-2 text-gray-800">
                                <div className="flex items-center gap-1">
                                    <FaHeart />
                                    <span>{post.likes}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaComment />
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <span className="font-bold">
                                {post.upload_date}
                            </span>
                            <div className="flex items-center gap-4 mt-2 text-gray-800">
                                <div className="flex items-center gap-1">
                                    <FaHeart />
                                    <span>{post.likes}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaComment />
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="font-bold">Image Upload</h1>
                            <span>{post.upload_date}</span>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">

                        <div>
                            <span className="font-bold block">Today</span>
                        </div>

                        <div>
                            <span className="font-bold block">{post.upload_date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-800">
                            <FaHeart className="text-black" />
                            <span>{post.likes}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-800">
                            <FaComment className="text-black" />
                            <span>{post.comments}</span>
                        </div>


                        <div className="flex items-center gap-2 text-gray-800">
                            <FaHeart className="text-black" />
                            <span>{post.likes}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-800">
                            <FaComment className="text-black" />
                            <span>{post.comments}</span>
                        </div>

                        <div className="col-span-2 pt-2 flex justify-between border-gray-200">
                            <span className="font-bold block">
                                Image Upload
                            </span>
                            <span className="text-gray-800">
                                {post.upload_date}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
