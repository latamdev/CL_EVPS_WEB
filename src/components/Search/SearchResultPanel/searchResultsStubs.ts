import { SearchResults } from "./interfaces";

export const MOCK_SEARCH_RESULT: SearchResults = {
  results: [
    {
      resourceType: "videos",
      resourceList: [
        {
          title: "video 1",
          id: "12345",
          poster:
            "https://burst.shopifycdn.com/photos/business-team-meeting-boardroom.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "video 2",
          id: "1233",
          poster:
            "https://burst.shopifycdn.com/photos/interior-of-a-restaurant-with-single-person-at-the-bar.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "video 3",
          id: "234234",
          poster:
            "https://burst.shopifycdn.com/photos/hands-on-desk-at-meeting.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
      ],
    },
    {
      resourceType: "e-books",
      resourceList: [
        {
          title: "libro 1",
          id: "12345",
          poster:
            "https://burst.shopifycdn.com/photos/making-a-budget-tracking-finances.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "libro 2",
          id: "1233",
          poster:
            "https://burst.shopifycdn.com/photos/team-sales-business-meeting.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "libro 3",
          id: "234234",
          poster:
            "https://burst.shopifycdn.com/photos/working-at-night.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
      ],
    },
    {
      resourceType: "recursos",
      resourceList: [
        {
          title: "pdf 1",
          id: "12345",
          poster:
            "https://burst.shopifycdn.com/photos/office-woman-hands-on-report.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "pdf 2",
          id: "1233",
          poster:
            "https://burst.shopifycdn.com/photos/reading-charts-at-business-meeting.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
        {
          title: "pdf 3",
          id: "234234",
          poster:
            "https://burst.shopifycdn.com/photos/stock-market-tracking-and-stocks.jpg?width=925&format=pjpg&exif=1&iptc=1",
          teacher: "Paula Rojas",
        },
      ],
    },
  ],
};

export const MOCK_SEARCH_RESULT_BLANK: SearchResults = {
  results: [],
};
