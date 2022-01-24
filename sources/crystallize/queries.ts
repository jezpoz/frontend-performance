export const getPageContentQuery: string = `
{
  catalogue(path: "/frontend-performance") {
    title: component(id: "title") {
      content {
        ... on SingleLineContent {
          text
        }
      }
    }
    hero: component(id: "hero") {
      content {
        ... on VideoContent {
          firstVideo {
            playlists
            thumbnails {
              ...img
            }
          }
        }
      }
    }
    body: component(id: "body") {
      content {
        ... on ParagraphCollectionContent {
          paragraphs {
            title {
              text
            }
            images {
              ...img
            }
            body {
              json
            }
          }
        }
      }
    }
  }
}

fragment img on Image {
  url
  altText
  variants {
    url
    width
    height
    size
  }
}
`;