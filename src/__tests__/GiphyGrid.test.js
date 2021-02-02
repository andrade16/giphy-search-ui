import React from "react";
import renderer from "react-test-renderer";
import GiphyGrid from "../components/GiphyGrid/GiphyGrid";

const mockGifs = [
  {
    analytics: {},
    analytics_response_payload: "",
    bitly_gif_url: "https://gph.is/2pLKLNW",
    bitly_url: "https://gph.is/2pLKLNW",
    content_url: "",
    embed_url: "https://giphy.com/embed/yNs2a0jRkYxy6191B2",
    id: "yNs2a0jRkYxy6191B2",
    images: { fixed_width: {} },
    import_datetime: "2018-03-28 18:38:53",
    is_sticker: 0,
    rating: "g",
    slug: "latenightseth-seth-meyers-lnsm-yNs2a0jRkYxy6191B2",
    source: "https://www.youtube.com/user/LateNightSeth/",
    source_post_url: "https://www.youtube.com/user/LateNightSeth/",
    source_tld: "www.youtube.com",
    title: "Fail Seth Meyers GIF by Late Night with Seth Meyers",
    trending_datetime: "0000-00-00 00:00:00",
    type: "gif",
    url:
      "https://giphy.com/gifs/latenightseth-seth-meyers-lnsm-yNs2a0jRkYxy6191B2",
    user: {
      avatar_url:
        "https://media1.giphy.com/avatars/latenightwithsethmeyers/wDIHpL5y74cm.jpg",
      banner_image: "",
      banner_url: "",
      profile_url: "https://giphy.com/latenightseth/",
      username: "latenightseth",
    },
    username: "latenightseth",
  },
  {
    analytics: {},
    analytics_response_payload: "",
    bitly_gif_url: "https://gph.is/2pLKLNW",
    bitly_url: "https://gph.is/2pLKLNW",
    content_url: "",
    embed_url: "https://giphy.com/embed/yNs2a0jRkYxy6191B2",
    id: "test",
    images: { fixed_width: {} },
    import_datetime: "2018-03-28 18:38:53",
    is_sticker: 0,
    rating: "g",
    slug: "latenightseth-seth-testing-lnsm-yNs2a0jRkYxy6191B2",
    source: "https://www.youtube.com/user/test/",
    source_post_url: "https://www.youtube.com/user/test/",
    source_tld: "www.youtube.com",
    title: "",
    trending_datetime: "0000-00-00 00:00:00",
    type: "gif",
    url:
      "https://giphy.com/gifs/latenightseth-seth-meyers-lnsm-yNs2a0jRkYxy6191B2",
    user: {
      avatar_url:
        "https://media1.giphy.com/avatars/latenightwithsethmeyers/wDIHpL5y74cm.jpg",
      banner_image: "",
      banner_url: "",
      profile_url: "https://giphy.com/latenightseth/",
      username: "latenightseth",
    },
    username: "latenightseth",
  },
];

describe("GiphyGrid", () => {
  it("renders GiphyGrid correctly with gifs prop", () => {
    const tree = renderer.create(<GiphyGrid gifs={mockGifs || []} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
