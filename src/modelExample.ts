const example = {
  sections: {
    header1: {
      fields: {
        title: "string",
        subtitle: "string (optional)",
        backgroundImage: "url",
      },
    },
    header2: {
      fields: {
        headerImg: "url",
        title: "string",
        isSubtitle: "boolean",
        description: "string (optional)",
      },
    },
    textBlock: {
      fields: {
        content: "string",
        align: "left | center | right",
      },
    },
    imageGallery: {
      fields: {
        images: "array of urls",
        layout: "grid | carousel",
      },
    },
    callToAction: {
      fields: {
        buttonText: "string",
        buttonLink: "url",
        backgroundColor: "string",
      },
    },
  },
  order: {
    "1": "header1",
    "2": "textBlock",
    "3": "imageGallery",
    "4": "callToAction",
  },
};

const example2 = {
  blog_post: {
    id: "UUID (Primary Key)",
    created_at: "Timestamp",
    slug: "String (Unique)",
    author: "String",
    published: "Boolean",
    keywords: "Array of Strings",
    favicon: "String (URL)",
    cover_image: "String (URL)",
  },
  sections: {
    id: "UUID (Primary Key)",
    blog_id: "UUID (Foreign Key, references blog_post.id)",
    order: "Integer (Defines the section order)",
    type: "UUID: FK to a section table",
  },
};
