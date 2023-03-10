import APIs from "./api";

const DashBoardServices = {
  GetAllDashArticle: (arg) => {
    return APIs.get("/api/write/article", { headers: { limit: arg } }).then(
      (data) => {
        if (data?.data?.message === "success") {
          return data.data;
        }
      }
    );
  },

  GetTotalPost: (arg) => {
    return APIs.get("/api/write/posted_article", {
      headers: { limit: arg },
    }).then((data) => {
      if (data?.data?.message === "success") {
        return data.data;
      }
    });
  },

  getDashSingleArticle: (id) => {
    return APIs.get(`/api/write/article/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getDashSingleArticleForAdmin: (id) => {
    return APIs.get(`/api/write/single_article/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getUserDetails: () => {
    return APIs.get(`/api/user/user_details`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOthersUserDetails: (username) => {
    return APIs.get(`/api/user/${username}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  editUserDetails: (payload) => {
    return APIs.patch(`/api/user/user_details`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostComment: (postId, params) => {
    return APIs.post(`/api/comment/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostComment: (id) => {
    return APIs.get(`/api/comment/single_post/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostLike: (postId) => {
    return APIs.get(`/api/like/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostLike: (postId, params) => {
    return APIs.post(`/api/like/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllPostDisLike: (postId) => {
    return APIs.get(`/api/dislike/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PostDisLike: (postId, params) => {
    return APIs.post(`/api/dislike/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  SavePost: (postId, params) => {
    return APIs.post(`/api/savedpost/${postId}`, params)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllYourSavedPost: (postId) => {
    return APIs.get(`/api/savedpost/saved_post`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getSavePostCount: () => {
    return APIs.get(`/api/savedpost/saved_count`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserSavePostCount: (userId) => {
    return APIs.get(`/api/savedpost/saved_count/${userId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteSavedPost: (postId) => {
    return APIs.delete(`/api/savedpost/${postId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  createFollowers: (payload) => {
    return APIs.post(`/api/following/create_followers`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllFollowing: () => {
    return APIs.get(`/api/following/create_followers`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getFollowerCount: () => {
    return APIs.get(`/api/following/follower_count`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getMyFollowerCount: () => {
    return APIs.get(`/api/following/my_followers_count`)
      .then((data) => {
        console.log(data?.data, "today");
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllFollowers: () => {
    return APIs.get(`/api/following/my_followers`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserFollowerCount: (userId) => {
    return APIs.get(`/api/following/follower_count/${userId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getMyOtherUserFollowerCount: (userId) => {
    return APIs.get(`/api/following/my_followers_count/${userId}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteFollowing: (id) => {
    return APIs.delete(`/api/following/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getNotificationOfFollowers: (id) => {
    return APIs.get(`/api/following/notificate_followers`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getOtherUserArticle: (id) => {
    return APIs.get(`/api/write/notify/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  uploadImage: (payload) => {
    return APIs.post(`/api/upload/image`, payload, {
      headers: {
        cloudinary_id: "correct",
      },
    })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteCloudImage: (arg) => {
    return APIs.post(`/api/upload/delete_image`, arg)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  TotalArticle: (id) => {
    return APIs.get(`/api/write/total`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PendingArticle: (id) => {
    return APIs.get(`/api/write/pending`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PendingArticlePost: (arg) => {
    return APIs.get(`/api/write/post/pending`, { headers: { limit: arg } })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  NewArticle: (id) => {
    return APIs.get(`/api/write/new`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  NewArticlePost: (arg) => {
    return APIs.get(`/api/write/post/new`, { headers: { limit: arg } })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PublishArticle: (id) => {
    return APIs.get(`/api/write/publish`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  PublishArticlePost: (arg) => {
    return APIs.get(`/api/write/post/publish`, { headers: { limit: arg } })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  EditArticle: (id, payload) => {
    console.log(id, payload, "session 111");
    return APIs.patch(`/api/write/${id}`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  EditArticleByAdmin: (id, payload) => {
    return APIs.patch(`/api/write/editByAdmin/${id}`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  SearchArticle: (arg, search) => {
    return APIs.get(`/api/write/search_article/${search}`, {
      headers: { limit: arg },
    }).then((data) => {
      if (data?.data?.message === "success") {
        return data.data;
      }
    });
  },

  TabArticle: (arg, tab) => {
    return APIs.get(`/api/write/tag_article/${tab}`, {
      headers: { limit: arg },
    }).then((data) => {
      if (data?.data?.message === "success") {
        return data?.data;
      }
    });
  },

  SubTagsArticle: (arg, tag, subTag) => {
    return APIs.get(`/api/write/sub_tag_article/${tag}/${subTag}`, {
      headers: { limit: arg },
    })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getTags: () => {
    return APIs.get(`/api/subtitle/total`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default DashBoardServices;
