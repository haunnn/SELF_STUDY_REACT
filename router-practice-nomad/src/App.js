import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5')
    // const json = response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const json = {
    status: "ok",
    status_message: "Query was successful",
    data: {
      movie_count: 208,
      limit: 20,
      page_number: 1,
      movies: [
        {
          id: 48227,
          url: "https://yts.mx/movies/summer-in-the-shade-2020",
          imdb_code: "tt7556356",
          title: "Summer in the Shade",
          title_english: "Summer in the Shade",
          title_long: "Summer in the Shade (2020)",
          slug: "summer-in-the-shade-2020",
          year: 2020,
          rating: 8.6,
          runtime: 84,
          genres: ["Drama", "Mystery"],
          summary:
            "Summer, 1997. A holiday to Cornwall forces troubled 13-year-old Grace to confront her demons.",
          description_full:
            "Summer, 1997. A holiday to Cornwall forces troubled 13-year-old Grace to confront her demons.",
          synopsis:
            "Summer, 1997. A holiday to Cornwall forces troubled 13-year-old Grace to confront her demons.",
          yt_trailer_code: "SeZfevIravk",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/summer_in_the_shade_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/summer_in_the_shade_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/summer_in_the_shade_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/summer_in_the_shade_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/summer_in_the_shade_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/A5E080A145D0E8B3EBB63D76DCAA051F5D5B24DC",
              hash: "A5E080A145D0E8B3EBB63D76DCAA051F5D5B24DC",
              quality: "720p",
              type: "web",
              seeds: 35,
              peers: 10,
              size: "765.41 MB",
              size_bytes: 802590556,
              date_uploaded: "2023-01-15 00:07:25",
              date_uploaded_unix: 1673737645,
            },
            {
              url: "https://yts.mx/torrent/download/D9DF550F489921692E7A1A1CEB48348E93B9EA51",
              hash: "D9DF550F489921692E7A1A1CEB48348E93B9EA51",
              quality: "1080p",
              type: "web",
              seeds: 34,
              peers: 11,
              size: "1.39 GB",
              size_bytes: 1492501135,
              date_uploaded: "2023-01-15 00:58:56",
              date_uploaded_unix: 1673740736,
            },
          ],
          date_uploaded: "2023-01-15 00:07:25",
          date_uploaded_unix: 1673737645,
        },
        {
          id: 48226,
          url: "https://yts.mx/movies/end-to-end-2022",
          imdb_code: "tt17609274",
          title: "End to End",
          title_english: "End to End",
          title_long: "End to End (2022)",
          slug: "end-to-end-2022",
          year: 2022,
          rating: 9.2,
          runtime: 101,
          genres: ["Documentary"],
          summary:
            "Follows Ezra, who makes a journey across Britain, walking 1,200 miles in 95 days from the most westerly point of England, Lands End, to the northern tip of Scotland, John O'Groats.",
          description_full:
            "Follows Ezra, who makes a journey across Britain, walking 1,200 miles in 95 days from the most westerly point of England, Lands End, to the northern tip of Scotland, John O'Groats.",
          synopsis:
            "Follows Ezra, who makes a journey across Britain, walking 1,200 miles in 95 days from the most westerly point of England, Lands End, to the northern tip of Scotland, John O'Groats.",
          yt_trailer_code: "nQeRsZei-uo",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/end_to_end_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/end_to_end_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/end_to_end_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/end_to_end_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/end_to_end_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/71E528F7494E42D4CEA6C8EC5C590C66320CF13D",
              hash: "71E528F7494E42D4CEA6C8EC5C590C66320CF13D",
              quality: "720p",
              type: "web",
              seeds: 36,
              peers: 2,
              size: "933.44 MB",
              size_bytes: 978782781,
              date_uploaded: "2023-01-15 01:37:20",
              date_uploaded_unix: 1673743040,
            },
            {
              url: "https://yts.mx/torrent/download/0D02F1D9F6A631DB5C187A499F7245F1D353F652",
              hash: "0D02F1D9F6A631DB5C187A499F7245F1D353F652",
              quality: "1080p",
              type: "web",
              seeds: 62,
              peers: 3,
              size: "1.87 GB",
              size_bytes: 2007897211,
              date_uploaded: "2023-01-15 02:45:04",
              date_uploaded_unix: 1673747104,
            },
          ],
          date_uploaded: "2023-01-15 01:37:20",
          date_uploaded_unix: 1673743040,
        },
        {
          id: 48207,
          url: "https://yts.mx/movies/the-grizzlie-truth-2022",
          imdb_code: "tt22006106",
          title: "The Grizzlie Truth",
          title_english: "The Grizzlie Truth",
          title_long: "The Grizzlie Truth (2022)",
          slug: "the-grizzlie-truth-2022",
          year: 2022,
          rating: 8.8,
          runtime: 97,
          genres: ["Documentary"],
          summary: "",
          description_full: "",
          synopsis: "",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/the_grizzlie_truth_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/the_grizzlie_truth_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/the_grizzlie_truth_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/the_grizzlie_truth_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/the_grizzlie_truth_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/A22CA003CFE641BD96F6B84DECE53FC4E9AE2319",
              hash: "A22CA003CFE641BD96F6B84DECE53FC4E9AE2319",
              quality: "720p",
              type: "web",
              seeds: 19,
              peers: 11,
              size: "909.76 MB",
              size_bytes: 953952502,
              date_uploaded: "2023-01-14 16:23:59",
              date_uploaded_unix: 1673709839,
            },
            {
              url: "https://yts.mx/torrent/download/F27333F0CE3CD2DB7D16DF6701F6793227336780",
              hash: "F27333F0CE3CD2DB7D16DF6701F6793227336780",
              quality: "1080p",
              type: "web",
              seeds: 32,
              peers: 10,
              size: "1.82 GB",
              size_bytes: 1954210120,
              date_uploaded: "2023-01-14 17:25:59",
              date_uploaded_unix: 1673713559,
            },
          ],
          date_uploaded: "2023-01-14 16:23:59",
          date_uploaded_unix: 1673709839,
        },
        {
          id: 48204,
          url: "https://yts.mx/movies/cowboys-without-borders-2020",
          imdb_code: "tt9471654",
          title: "Cowboys Without Borders",
          title_english: "Cowboys Without Borders",
          title_long: "Cowboys Without Borders (2020)",
          slug: "cowboys-without-borders-2020",
          year: 2020,
          rating: 9.6,
          runtime: 0,
          genres: ["Documentary"],
          summary:
            'To uncover the truth of American Ranching Heritage and Culture through the eyes of North, Central and South American Cowboys. "Cowboy Without Borders" follows the story of Gaston Davis, a 6th generation Texan from a ranching background, as he explores ranches from Montana all the way down to Argentina, and everywhere in between. He works alongside American Cowboys from North America to Central and South America. Although the focus is on cattle operations in these countries, the heart of the story is discovered when the viewer recognizes that although thousands of miles apart and decades separated by advancement and technology, the heart of the American Cowboy remains the same, and they will forever serve their people on their respective frontiers.',
          description_full:
            'To uncover the truth of American Ranching Heritage and Culture through the eyes of North, Central and South American Cowboys. "Cowboy Without Borders" follows the story of Gaston Davis, a 6th generation Texan from a ranching background, as he explores ranches from Montana all the way down to Argentina, and everywhere in between. He works alongside American Cowboys from North America to Central and South America. Although the focus is on cattle operations in these countries, the heart of the story is discovered when the viewer recognizes that although thousands of miles apart and decades separated by advancement and technology, the heart of the American Cowboy remains the same, and they will forever serve their people on their respective frontiers.',
          synopsis:
            'To uncover the truth of American Ranching Heritage and Culture through the eyes of North, Central and South American Cowboys. "Cowboy Without Borders" follows the story of Gaston Davis, a 6th generation Texan from a ranching background, as he explores ranches from Montana all the way down to Argentina, and everywhere in between. He works alongside American Cowboys from North America to Central and South America. Although the focus is on cattle operations in these countries, the heart of the story is discovered when the viewer recognizes that although thousands of miles apart and decades separated by advancement and technology, the heart of the American Cowboy remains the same, and they will forever serve their people on their respective frontiers.',
          yt_trailer_code: "2-gmX0QuFTo",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/cowboys_without_borders_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/cowboys_without_borders_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/cowboys_without_borders_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/cowboys_without_borders_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/cowboys_without_borders_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/F4D10F725E7D017AEC8070C369397FE6FEE98B41",
              hash: "F4D10F725E7D017AEC8070C369397FE6FEE98B41",
              quality: "720p",
              type: "web",
              seeds: 26,
              peers: 3,
              size: "771.16 MB",
              size_bytes: 808619868,
              date_uploaded: "2023-01-14 21:39:37",
              date_uploaded_unix: 1673728777,
            },
            {
              url: "https://yts.mx/torrent/download/01BCEFE61E5C4BE2BA43A33A30807CE6ADD379B3",
              hash: "01BCEFE61E5C4BE2BA43A33A30807CE6ADD379B3",
              quality: "1080p",
              type: "web",
              seeds: 40,
              peers: 8,
              size: "1.54 GB",
              size_bytes: 1653562409,
              date_uploaded: "2023-01-14 22:32:58",
              date_uploaded_unix: 1673731978,
            },
          ],
          date_uploaded: "2023-01-14 21:39:37",
          date_uploaded_unix: 1673728777,
        },
        {
          id: 48202,
          url: "https://yts.mx/movies/ramsey-the-vandy-case-2021",
          imdb_code: "tt15051038",
          title: "Ramsey: The Vandy Case",
          title_english: "Ramsey: The Vandy Case",
          title_long: "Ramsey: The Vandy Case (2021)",
          slug: "ramsey-the-vandy-case-2021",
          year: 2021,
          rating: 8.7,
          runtime: 0,
          genres: ["Crime"],
          summary:
            'Private Investigator Kevin Ramsey is hired to discreetly look into the murder of Sarah Vandy, TV star and wild child with a scandalous reputation. As Ramsey weaves his way through the mystery, Former lovers, Obsessed fans and Activists all look good for the crime but "Sometimes the killer is standing right in front of you and ya don\'t even see em".',
          description_full:
            'Private Investigator Kevin Ramsey is hired to discreetly look into the murder of Sarah Vandy, TV star and wild child with a scandalous reputation. As Ramsey weaves his way through the mystery, Former lovers, Obsessed fans and Activists all look good for the crime but "Sometimes the killer is standing right in front of you and ya don\'t even see em".',
          synopsis:
            'Private Investigator Kevin Ramsey is hired to discreetly look into the murder of Sarah Vandy, TV star and wild child with a scandalous reputation. As Ramsey weaves his way through the mystery, Former lovers, Obsessed fans and Activists all look good for the crime but "Sometimes the killer is standing right in front of you and ya don\'t even see em".',
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/ramsey_the_vandy_case_2021/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/ramsey_the_vandy_case_2021/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/ramsey_the_vandy_case_2021/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/ramsey_the_vandy_case_2021/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/ramsey_the_vandy_case_2021/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/2D9A34CC1E47D5E71BD568261AA551DD2F88B271",
              hash: "2D9A34CC1E47D5E71BD568261AA551DD2F88B271",
              quality: "720p",
              type: "web",
              seeds: 51,
              peers: 8,
              size: "1.07 GB",
              size_bytes: 1148903752,
              date_uploaded: "2023-01-14 19:45:43",
              date_uploaded_unix: 1673721943,
            },
            {
              url: "https://yts.mx/torrent/download/A052D0C83B99DD3BCA0A10E4942612A1783CD59A",
              hash: "A052D0C83B99DD3BCA0A10E4942612A1783CD59A",
              quality: "1080p",
              type: "web",
              seeds: 68,
              peers: 8,
              size: "1.99 GB",
              size_bytes: 2136746230,
              date_uploaded: "2023-01-14 21:08:45",
              date_uploaded_unix: 1673726925,
            },
          ],
          date_uploaded: "2023-01-14 19:45:43",
          date_uploaded_unix: 1673721943,
        },
        {
          id: 48163,
          url: "https://yts.mx/movies/752-is-not-a-number-2022",
          imdb_code: "tt19816018",
          title: "752 Is Not a Number",
          title_english: "752 Is Not a Number",
          title_long: "752 Is Not a Number (2022)",
          slug: "752-is-not-a-number-2022",
          year: 2022,
          rating: 9,
          runtime: 98,
          genres: ["Biography", "Documentary"],
          summary:
            "The Downing of the Ukrainian passenger flight 752 over the skies of Tehran on January 8, 2020 shook the world. All 176 passengers were killed, among them women, children, university students and academics, many of them residents or citizens of Canada. The tragedy occurred during renewed tensions between Iran and the United States following the killing of an Iranian general in Iraq. Iran's retaliation for the general's killing was a missile attack on U.S. military installations near Baghdad on the morning of January 8. The exchange heightened the tensions with both sides bracing for military escalation. The ill-fated Ukrainian passenger airline took off from the Tehran International airport shortly after 6am and within 3 minutes, it was struck by two surface-to-air missiles from a nearby Islamic Revolutionary Guard Corps base. The downing was initially claimed to be an accident, a technical failure of sorts. As the world learned of the missile attacks, it took no more than a few hours after the missiles attacks for the site to be cleared by bulldozers and all evidence to be destroyed. Dr. Hamed Esmaeilion, a dentist in Toronto was leading an ordinary quiet life with his wife and nine-year-old daughter. They were among the victims aboard flight PS752. The dentist from Toronto was thrust into extraordinary circumstances in his fight for justice and to find the truth behind what took the lives of his wife and daughter.",
          description_full:
            "The Downing of the Ukrainian passenger flight 752 over the skies of Tehran on January 8, 2020 shook the world. All 176 passengers were killed, among them women, children, university students and academics, many of them residents or citizens of Canada. The tragedy occurred during renewed tensions between Iran and the United States following the killing of an Iranian general in Iraq. Iran's retaliation for the general's killing was a missile attack on U.S. military installations near Baghdad on the morning of January 8. The exchange heightened the tensions with both sides bracing for military escalation. The ill-fated Ukrainian passenger airline took off from the Tehran International airport shortly after 6am and within 3 minutes, it was struck by two surface-to-air missiles from a nearby Islamic Revolutionary Guard Corps base. The downing was initially claimed to be an accident, a technical failure of sorts. As the world learned of the missile attacks, it took no more than a few hours after the missiles attacks for the site to be cleared by bulldozers and all evidence to be destroyed. Dr. Hamed Esmaeilion, a dentist in Toronto was leading an ordinary quiet life with his wife and nine-year-old daughter. They were among the victims aboard flight PS752. The dentist from Toronto was thrust into extraordinary circumstances in his fight for justice and to find the truth behind what took the lives of his wife and daughter.",
          synopsis:
            "The Downing of the Ukrainian passenger flight 752 over the skies of Tehran on January 8, 2020 shook the world. All 176 passengers were killed, among them women, children, university students and academics, many of them residents or citizens of Canada. The tragedy occurred during renewed tensions between Iran and the United States following the killing of an Iranian general in Iraq. Iran's retaliation for the general's killing was a missile attack on U.S. military installations near Baghdad on the morning of January 8. The exchange heightened the tensions with both sides bracing for military escalation. The ill-fated Ukrainian passenger airline took off from the Tehran International airport shortly after 6am and within 3 minutes, it was struck by two surface-to-air missiles from a nearby Islamic Revolutionary Guard Corps base. The downing was initially claimed to be an accident, a technical failure of sorts. As the world learned of the missile attacks, it took no more than a few hours after the missiles attacks for the site to be cleared by bulldozers and all evidence to be destroyed. Dr. Hamed Esmaeilion, a dentist in Toronto was leading an ordinary quiet life with his wife and nine-year-old daughter. They were among the victims aboard flight PS752. The dentist from Toronto was thrust into extraordinary circumstances in his fight for justice and to find the truth behind what took the lives of his wife and daughter.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/752_is_not_a_number_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/752_is_not_a_number_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/752_is_not_a_number_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/752_is_not_a_number_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/752_is_not_a_number_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/E88C7AA1CD524CD9C984B801A3C8460B1786F8C8",
              hash: "E88C7AA1CD524CD9C984B801A3C8460B1786F8C8",
              quality: "720p",
              type: "web",
              seeds: 44,
              peers: 7,
              size: "923.59 MB",
              size_bytes: 968454308,
              date_uploaded: "2023-01-11 23:34:59",
              date_uploaded_unix: 1673476499,
            },
            {
              url: "https://yts.mx/torrent/download/3320D080EA1388CED437283A5CD657C1410792F7",
              hash: "3320D080EA1388CED437283A5CD657C1410792F7",
              quality: "1080p",
              type: "web",
              seeds: 55,
              peers: 6,
              size: "1.85 GB",
              size_bytes: 1986422374,
              date_uploaded: "2023-01-12 00:30:34",
              date_uploaded_unix: 1673479834,
            },
          ],
          date_uploaded: "2023-01-11 23:34:59",
          date_uploaded_unix: 1673476499,
        },
        {
          id: 48159,
          url: "https://yts.mx/movies/detectorists-2014",
          imdb_code: "tt4082744",
          title: "Detectorists",
          title_english: "Detectorists",
          title_long: "Detectorists (2014)",
          slug: "detectorists-2014",
          year: 2014,
          rating: 8.6,
          runtime: 174,
          genres: ["Comedy"],
          summary:
            "The lives of two eccentric metal detectorists, who spend their days plodding along ploughed tracks and open fields, hoping to disturb the tedium by unearthing the fortune of a lifetime.",
          description_full:
            "The lives of two eccentric metal detectorists, who spend their days plodding along ploughed tracks and open fields, hoping to disturb the tedium by unearthing the fortune of a lifetime.",
          synopsis:
            "The lives of two eccentric metal detectorists, who spend their days plodding along ploughed tracks and open fields, hoping to disturb the tedium by unearthing the fortune of a lifetime.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/detectorists_2014/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/detectorists_2014/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_2014/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_2014/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_2014/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/E0D9439011A68BA0E6438D036C0E245D14E9BECC",
              hash: "E0D9439011A68BA0E6438D036C0E245D14E9BECC",
              quality: "720p",
              type: "web",
              seeds: 45,
              peers: 5,
              size: "682.5 MB",
              size_bytes: 715653120,
              date_uploaded: "2023-01-11 00:58:37",
              date_uploaded_unix: 1673395117,
            },
            {
              url: "https://yts.mx/torrent/download/A0B6A893EA44E635363F5B0344A88CC283284780",
              hash: "A0B6A893EA44E635363F5B0344A88CC283284780",
              quality: "1080p",
              type: "web",
              seeds: 58,
              peers: 6,
              size: "1.24 GB",
              size_bytes: 1331439862,
              date_uploaded: "2023-01-11 01:43:58",
              date_uploaded_unix: 1673397838,
            },
          ],
          date_uploaded: "2023-01-11 00:58:37",
          date_uploaded_unix: 1673395117,
        },
        {
          id: 48156,
          url: "https://yts.mx/movies/rite-of-the-shaman-2022",
          imdb_code: "tt14016830",
          title: "Rite of the Shaman",
          title_english: "Rite of the Shaman",
          title_long: "Rite of the Shaman (2022)",
          slug: "rite-of-the-shaman-2022",
          year: 2022,
          rating: 8.7,
          runtime: 69,
          genres: ["Drama"],
          summary:
            "Kai is a mute high school student who is taking care of his mother. He finds solace in nature, as well as memories of his late shaman grandfather. While trying to cope with the pressures of life at home and intimidation from a bully at school, Kai becomes depressed and begins pushing his loved ones away. He is ultimately faced with a decision. Will he continue down a dark path of negativity? Or, with his grandfather's wisdom as his guide, will Kai embrace his destiny and become the beacon of light that he was meant to be? Rite of the Shaman is about everyday heroes and demonstrates how the smallest acts of kindness can ultimately impact people's lives for the better.",
          description_full:
            "Kai is a mute high school student who is taking care of his mother. He finds solace in nature, as well as memories of his late shaman grandfather. While trying to cope with the pressures of life at home and intimidation from a bully at school, Kai becomes depressed and begins pushing his loved ones away. He is ultimately faced with a decision. Will he continue down a dark path of negativity? Or, with his grandfather's wisdom as his guide, will Kai embrace his destiny and become the beacon of light that he was meant to be? Rite of the Shaman is about everyday heroes and demonstrates how the smallest acts of kindness can ultimately impact people's lives for the better.",
          synopsis:
            "Kai is a mute high school student who is taking care of his mother. He finds solace in nature, as well as memories of his late shaman grandfather. While trying to cope with the pressures of life at home and intimidation from a bully at school, Kai becomes depressed and begins pushing his loved ones away. He is ultimately faced with a decision. Will he continue down a dark path of negativity? Or, with his grandfather's wisdom as his guide, will Kai embrace his destiny and become the beacon of light that he was meant to be? Rite of the Shaman is about everyday heroes and demonstrates how the smallest acts of kindness can ultimately impact people's lives for the better.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/rite_of_the_shaman_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/rite_of_the_shaman_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/rite_of_the_shaman_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/rite_of_the_shaman_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/rite_of_the_shaman_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/1BEEC83146046E790E2D41DACDFC86D9097A9BAC",
              hash: "1BEEC83146046E790E2D41DACDFC86D9097A9BAC",
              quality: "720p",
              type: "web",
              seeds: 139,
              peers: 19,
              size: "632.12 MB",
              size_bytes: 662825861,
              date_uploaded: "2023-01-10 17:51:26",
              date_uploaded_unix: 1673369486,
            },
            {
              url: "https://yts.mx/torrent/download/3AE43E6A3142F8D964178F6EDBC31DAA6DC5B049",
              hash: "3AE43E6A3142F8D964178F6EDBC31DAA6DC5B049",
              quality: "1080p",
              type: "web",
              seeds: 189,
              peers: 27,
              size: "1.27 GB",
              size_bytes: 1363652116,
              date_uploaded: "2023-01-10 18:31:14",
              date_uploaded_unix: 1673371874,
            },
          ],
          date_uploaded: "2023-01-10 17:51:26",
          date_uploaded_unix: 1673369486,
        },
        {
          id: 48137,
          url: "https://yts.mx/movies/detectorists-special-2022",
          imdb_code: "tt21019050",
          title: "Detectorists Special",
          title_english: "Detectorists Special",
          title_long: "Detectorists Special (2022)",
          slug: "detectorists-special-2022",
          year: 2022,
          rating: 8.5,
          runtime: 74,
          genres: ["Comedy"],
          summary:
            "The Danebury Metal Detecting Club is in trouble; developers are sniffing around, and after losing out on a big finder's fee, the club is going to need a miracle to help save their beloved scout hall. So when Lance manages to secure a permission to search ten acres of prime, undetected land, it looks like things could be on the up. But when a mysterious relic is unearthed, Lance breaks protocol, threatening his friendship with Andy and the future of the DMDC.",
          description_full:
            "The Danebury Metal Detecting Club is in trouble; developers are sniffing around, and after losing out on a big finder's fee, the club is going to need a miracle to help save their beloved scout hall. So when Lance manages to secure a permission to search ten acres of prime, undetected land, it looks like things could be on the up. But when a mysterious relic is unearthed, Lance breaks protocol, threatening his friendship with Andy and the future of the DMDC.",
          synopsis:
            "The Danebury Metal Detecting Club is in trouble; developers are sniffing around, and after losing out on a big finder's fee, the club is going to need a miracle to help save their beloved scout hall. So when Lance manages to secure a permission to search ten acres of prime, undetected land, it looks like things could be on the up. But when a mysterious relic is unearthed, Lance breaks protocol, threatening his friendship with Andy and the future of the DMDC.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/detectorists_special_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/detectorists_special_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_special_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_special_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/detectorists_special_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/2247175D9A44554ABEC033EEB1D3C2B3C87779EB",
              hash: "2247175D9A44554ABEC033EEB1D3C2B3C87779EB",
              quality: "720p",
              type: "web",
              seeds: 73,
              peers: 11,
              size: "682.5 MB",
              size_bytes: 715653120,
              date_uploaded: "2023-01-10 05:42:58",
              date_uploaded_unix: 1673325778,
            },
            {
              url: "https://yts.mx/torrent/download/25A5096524131DBCBA875783AFFC3771DC8DEB6D",
              hash: "25A5096524131DBCBA875783AFFC3771DC8DEB6D",
              quality: "1080p",
              type: "web",
              seeds: 166,
              peers: 15,
              size: "1.24 GB",
              size_bytes: 1331439862,
              date_uploaded: "2023-01-10 06:28:50",
              date_uploaded_unix: 1673328530,
            },
          ],
          date_uploaded: "2023-01-10 05:42:58",
          date_uploaded_unix: 1673325778,
        },
        {
          id: 48027,
          url: "https://yts.mx/movies/ranah-3-warna-2021",
          imdb_code: "tt10816448",
          title: "Ranah 3 Warna",
          title_english: "Ranah 3 Warna",
          title_long: "Ranah 3 Warna (2021)",
          slug: "ranah-3-warna-2021",
          year: 2021,
          rating: 8.7,
          runtime: 150,
          genres: ["Drama"],
          summary:
            'Alif has just graduated from Pondok Madani. With a bubbling spirit, he went home to Maninjau and could not wait to go to college. However, his best friend, Randai, has a doubt that Alif could pass the college entrance test. Then, he realizes that he does not have Certificate of Senior High School. He brakes down his obstacles. He earns the certificate and passes the test in Padjadjaran University. Alif who lives with Randai (who passes in Bandung Institute of Technology) experiences another obstacle. He is almost discouraged due to the death of his father. Alif is tightening his belt. He almost gives up. Apparently, the spell "man jadda wa jada" (he who gives his all will surely succeed) is insufficiently powerful to win a life. Alif recalls the second spell taught in Pondok Madani: "man shabara zhafira" (he who is patient will be fortunate). Armed with both spell, he is ready to face each \'storm\' in his life. Including the storm in his heart, Raisa, the girl who is also close to Randai.',
          description_full:
            'Alif has just graduated from Pondok Madani. With a bubbling spirit, he went home to Maninjau and could not wait to go to college. However, his best friend, Randai, has a doubt that Alif could pass the college entrance test. Then, he realizes that he does not have Certificate of Senior High School. He brakes down his obstacles. He earns the certificate and passes the test in Padjadjaran University. Alif who lives with Randai (who passes in Bandung Institute of Technology) experiences another obstacle. He is almost discouraged due to the death of his father. Alif is tightening his belt. He almost gives up. Apparently, the spell "man jadda wa jada" (he who gives his all will surely succeed) is insufficiently powerful to win a life. Alif recalls the second spell taught in Pondok Madani: "man shabara zhafira" (he who is patient will be fortunate). Armed with both spell, he is ready to face each \'storm\' in his life. Including the storm in his heart, Raisa, the girl who is also close to Randai.',
          synopsis:
            'Alif has just graduated from Pondok Madani. With a bubbling spirit, he went home to Maninjau and could not wait to go to college. However, his best friend, Randai, has a doubt that Alif could pass the college entrance test. Then, he realizes that he does not have Certificate of Senior High School. He brakes down his obstacles. He earns the certificate and passes the test in Padjadjaran University. Alif who lives with Randai (who passes in Bandung Institute of Technology) experiences another obstacle. He is almost discouraged due to the death of his father. Alif is tightening his belt. He almost gives up. Apparently, the spell "man jadda wa jada" (he who gives his all will surely succeed) is insufficiently powerful to win a life. Alif recalls the second spell taught in Pondok Madani: "man shabara zhafira" (he who is patient will be fortunate). Armed with both spell, he is ready to face each \'storm\' in his life. Including the storm in his heart, Raisa, the girl who is also close to Randai.',
          yt_trailer_code: "7elVqrU6I-I",
          language: "id",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/ranah_3_warna_2021/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/ranah_3_warna_2021/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/ranah_3_warna_2021/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/ranah_3_warna_2021/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/ranah_3_warna_2021/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/EA24072B165C7FBAAA3A343E9D2A5826BE9D77DD",
              hash: "EA24072B165C7FBAAA3A343E9D2A5826BE9D77DD",
              quality: "720p",
              type: "web",
              seeds: 13,
              peers: 4,
              size: "1.15 GB",
              size_bytes: 1234803098,
              date_uploaded: "2023-01-06 02:38:07",
              date_uploaded_unix: 1672969087,
            },
            {
              url: "https://yts.mx/torrent/download/ADE13D4F836B344E546F9218E8BBFCF69BD10CEE",
              hash: "ADE13D4F836B344E546F9218E8BBFCF69BD10CEE",
              quality: "1080p",
              type: "web",
              seeds: 11,
              peers: 7,
              size: "2.37 GB",
              size_bytes: 2544768123,
              date_uploaded: "2023-01-06 03:52:28",
              date_uploaded_unix: 1672973548,
            },
          ],
          date_uploaded: "2023-01-06 02:38:07",
          date_uploaded_unix: 1672969087,
        },
        {
          id: 48017,
          url: "https://yts.mx/movies/dreamland-a-storming-area-51-story-2022",
          imdb_code: "tt15513114",
          title: "Dreamland: A Storming Area 51 Story",
          title_english: "Dreamland: A Storming Area 51 Story",
          title_long: "Dreamland: A Storming Area 51 Story (2022)",
          slug: "dreamland-a-storming-area-51-story-2022",
          year: 2022,
          rating: 9.5,
          runtime: 85,
          genres: ["Documentary"],
          summary:
            "A wild and unexpected cast and crew come together before the viral Storming Area 51 event to film one of the most unique documentaries you have ever seen, modern day Cinema Verite. A life-long alien enthusiast, filmmaker and comedian, Brian Moreno, takes us on a journey into an ever growing subculture; the alien, UFO conspiracy community. We get to see this community but we also get a very interesting and heartwarming story about a cast and crew that have very mixed feelings about even being there. The trip begins in Los Angeles and finishes at the legendary Area 51 site in Rachel, NV. Nothing goes as planned, or does it? This is a ride that takes you into the land of Comedy, Interviews, Conspiracy, Aliens and so much more. Even if you know nothing about Aliens or Area 51 there is something in this film for you. It's a fast paced, wild film that will leave you pleasantly surprised and asking questions. This is a failure story, or maybe not.",
          description_full:
            "A wild and unexpected cast and crew come together before the viral Storming Area 51 event to film one of the most unique documentaries you have ever seen, modern day Cinema Verite. A life-long alien enthusiast, filmmaker and comedian, Brian Moreno, takes us on a journey into an ever growing subculture; the alien, UFO conspiracy community. We get to see this community but we also get a very interesting and heartwarming story about a cast and crew that have very mixed feelings about even being there. The trip begins in Los Angeles and finishes at the legendary Area 51 site in Rachel, NV. Nothing goes as planned, or does it? This is a ride that takes you into the land of Comedy, Interviews, Conspiracy, Aliens and so much more. Even if you know nothing about Aliens or Area 51 there is something in this film for you. It's a fast paced, wild film that will leave you pleasantly surprised and asking questions. This is a failure story, or maybe not.",
          synopsis:
            "A wild and unexpected cast and crew come together before the viral Storming Area 51 event to film one of the most unique documentaries you have ever seen, modern day Cinema Verite. A life-long alien enthusiast, filmmaker and comedian, Brian Moreno, takes us on a journey into an ever growing subculture; the alien, UFO conspiracy community. We get to see this community but we also get a very interesting and heartwarming story about a cast and crew that have very mixed feelings about even being there. The trip begins in Los Angeles and finishes at the legendary Area 51 site in Rachel, NV. Nothing goes as planned, or does it? This is a ride that takes you into the land of Comedy, Interviews, Conspiracy, Aliens and so much more. Even if you know nothing about Aliens or Area 51 there is something in this film for you. It's a fast paced, wild film that will leave you pleasantly surprised and asking questions. This is a failure story, or maybe not.",
          yt_trailer_code: "CNOJvVDtoWw",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/dreamland_a_storming_area_51_story_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/dreamland_a_storming_area_51_story_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/dreamland_a_storming_area_51_story_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/dreamland_a_storming_area_51_story_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/dreamland_a_storming_area_51_story_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/3477DB226AB05AA67C62F35CA0198332C3B329F2",
              hash: "3477DB226AB05AA67C62F35CA0198332C3B329F2",
              quality: "720p",
              type: "web",
              seeds: 55,
              peers: 6,
              size: "785.3 MB",
              size_bytes: 823446733,
              date_uploaded: "2023-01-06 01:12:40",
              date_uploaded_unix: 1672963960,
            },
            {
              url: "https://yts.mx/torrent/download/9C45B37F6BD0FCFA051C0B902279F0163FBFB210",
              hash: "9C45B37F6BD0FCFA051C0B902279F0163FBFB210",
              quality: "1080p",
              type: "web",
              seeds: 63,
              peers: 9,
              size: "1.42 GB",
              size_bytes: 1524713390,
              date_uploaded: "2023-01-06 02:22:18",
              date_uploaded_unix: 1672968138,
            },
          ],
          date_uploaded: "2023-01-06 01:12:40",
          date_uploaded_unix: 1672963960,
        },
        {
          id: 48004,
          url: "https://yts.mx/movies/tipping-the-pain-scale-2021",
          imdb_code: "tt12877408",
          title: "Tipping the Pain Scale",
          title_english: "Tipping the Pain Scale",
          title_long: "Tipping the Pain Scale (2021)",
          slug: "tipping-the-pain-scale-2021",
          year: 2021,
          rating: 9,
          runtime: 0,
          genres: ["Documentary"],
          summary:
            "A feature documentary film following individuals grappling with the current systemic failures of how we have dealt with addiction and their journey to develop and employ new, innovative, and often controversial solutions to the problem.",
          description_full:
            "A feature documentary film following individuals grappling with the current systemic failures of how we have dealt with addiction and their journey to develop and employ new, innovative, and often controversial solutions to the problem.",
          synopsis:
            "A feature documentary film following individuals grappling with the current systemic failures of how we have dealt with addiction and their journey to develop and employ new, innovative, and often controversial solutions to the problem.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/tipping_the_pain_scale_2021/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/tipping_the_pain_scale_2021/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/tipping_the_pain_scale_2021/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/tipping_the_pain_scale_2021/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/tipping_the_pain_scale_2021/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/0E74E330FB22DFFFAE0566811CFFF348697CE929",
              hash: "0E74E330FB22DFFFAE0566811CFFF348697CE929",
              quality: "720p",
              type: "web",
              seeds: 26,
              peers: 2,
              size: "966.66 MB",
              size_bytes: 1013616476,
              date_uploaded: "2023-01-05 18:46:09",
              date_uploaded_unix: 1672940769,
            },
            {
              url: "https://yts.mx/torrent/download/3F7054EE2AE5B8801119DFD17A4867A074C5D9B9",
              hash: "3F7054EE2AE5B8801119DFD17A4867A074C5D9B9",
              quality: "1080p",
              type: "web",
              seeds: 26,
              peers: 2,
              size: "1.75 GB",
              size_bytes: 1879048192,
              date_uploaded: "2023-01-05 20:09:41",
              date_uploaded_unix: 1672945781,
            },
          ],
          date_uploaded: "2023-01-05 18:46:09",
          date_uploaded_unix: 1672940769,
        },
        {
          id: 47571,
          url: "https://yts.mx/movies/20-years-of-christmas-with-the-tabernacle-choir-2021",
          imdb_code: "tt16440930",
          title: "20 Years of Christmas with the Tabernacle Choir",
          title_english: "20 Years of Christmas with the Tabernacle Choir",
          title_long: "20 Years of Christmas with the Tabernacle Choir (2021)",
          slug: "20-years-of-christmas-with-the-tabernacle-choir-2021",
          year: 2021,
          rating: 9.1,
          runtime: 0,
          genres: ["Action"],
          summary: "",
          description_full: "",
          synopsis: "",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/20_years_of_christmas_with_the_tabernacle_choir_2021/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/20_years_of_christmas_with_the_tabernacle_choir_2021/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/20_years_of_christmas_with_the_tabernacle_choir_2021/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/20_years_of_christmas_with_the_tabernacle_choir_2021/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/20_years_of_christmas_with_the_tabernacle_choir_2021/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/55670FE0F851CC1C0F686A9B1A9A9B1FF764821E",
              hash: "55670FE0F851CC1C0F686A9B1A9A9B1FF764821E",
              quality: "720p",
              type: "web",
              seeds: 9,
              peers: 2,
              size: "521.76 MB",
              size_bytes: 547105014,
              date_uploaded: "2022-12-15 23:17:37",
              date_uploaded_unix: 1671142657,
            },
            {
              url: "https://yts.mx/torrent/download/0704EBFA979D84E5DE95D9375835E66BB8AE987B",
              hash: "0704EBFA979D84E5DE95D9375835E66BB8AE987B",
              quality: "1080p",
              type: "web",
              seeds: 16,
              peers: 3,
              size: "966.02 MB",
              size_bytes: 1012945388,
              date_uploaded: "2022-12-16 00:00:09",
              date_uploaded_unix: 1671145209,
            },
          ],
          date_uploaded: "2022-12-15 23:17:37",
          date_uploaded_unix: 1671142657,
        },
        {
          id: 47540,
          url: "https://yts.mx/movies/strive-strive-strive-2021",
          imdb_code: "tt14687192",
          title: "Strive, Strive, Strive",
          title_english: "Strive, Strive, Strive",
          title_long: "Strive, Strive, Strive (2021)",
          slug: "strive-strive-strive-2021",
          year: 2021,
          rating: 8.9,
          runtime: 110,
          genres: ["Documentary", "Sport"],
          summary:
            "Documentary film about the Brazilian football club Atletico Mineiro, but also about something intangible: football, its emotion and imperishable spirit.",
          description_full:
            "Documentary film about the Brazilian football club Atletico Mineiro, but also about something intangible: football, its emotion and imperishable spirit.",
          synopsis:
            "Documentary film about the Brazilian football club Atletico Mineiro, but also about something intangible: football, its emotion and imperishable spirit.",
          yt_trailer_code: "TcFWdM1i8Ho",
          language: "pt",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/strive_strive_strive_2021/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/strive_strive_strive_2021/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/strive_strive_strive_2021/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/strive_strive_strive_2021/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/strive_strive_strive_2021/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/4E62D7BD628B6ADB3D86BA77251157BBBB50E027",
              hash: "4E62D7BD628B6ADB3D86BA77251157BBBB50E027",
              quality: "720p",
              type: "web",
              seeds: 2,
              peers: 3,
              size: "1018.39 MB",
              size_bytes: 1067859313,
              date_uploaded: "2022-12-14 21:37:50",
              date_uploaded_unix: 1671050270,
            },
            {
              url: "https://yts.mx/torrent/download/F9E56B4F7A72494F53A8EB0A1BAC3835BA3F0903",
              hash: "F9E56B4F7A72494F53A8EB0A1BAC3835BA3F0903",
              quality: "1080p",
              type: "web",
              seeds: 3,
              peers: 4,
              size: "1.84 GB",
              size_bytes: 1975684956,
              date_uploaded: "2022-12-14 22:52:49",
              date_uploaded_unix: 1671054769,
            },
          ],
          date_uploaded: "2022-12-14 21:37:50",
          date_uploaded_unix: 1671050270,
        },
        {
          id: 47490,
          url: "https://yts.mx/movies/all-creatures-great-and-small-2020",
          imdb_code: "tt10590066",
          title: "All Creatures Great and Small",
          title_english: "All Creatures Great and Small",
          title_long: "All Creatures Great and Small (2020)",
          slug: "all-creatures-great-and-small-2020",
          year: 2020,
          rating: 8.6,
          runtime: 0,
          genres: ["Comedy", "Drama"],
          summary: "",
          description_full: "",
          synopsis: "",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/all_creatures_great_and_small_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/all_creatures_great_and_small_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/all_creatures_great_and_small_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/all_creatures_great_and_small_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/all_creatures_great_and_small_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/245F60EF320DD4B773BE799502E7CF837D36538D",
              hash: "245F60EF320DD4B773BE799502E7CF837D36538D",
              quality: "720p",
              type: "bluray",
              seeds: 15,
              peers: 1,
              size: "564.27 MB",
              size_bytes: 591679980,
              date_uploaded: "2022-12-13 05:44:32",
              date_uploaded_unix: 1670906672,
            },
            {
              url: "https://yts.mx/torrent/download/F6E7A85354A24E1ABFABDF677EF3C2BB8E6EB7E6",
              hash: "F6E7A85354A24E1ABFABDF677EF3C2BB8E6EB7E6",
              quality: "1080p",
              type: "bluray",
              seeds: 21,
              peers: 0,
              size: "1.02 GB",
              size_bytes: 1095216660,
              date_uploaded: "2022-12-13 06:28:57",
              date_uploaded_unix: 1670909337,
            },
          ],
          date_uploaded: "2022-12-13 05:44:32",
          date_uploaded_unix: 1670906672,
        },
        {
          id: 47400,
          url: "https://yts.mx/movies/drishyam-2-2022",
          imdb_code: "tt15501640",
          title: "Drishyam 2",
          title_english: "Drishyam 2",
          title_long: "Drishyam 2 (2022)",
          slug: "drishyam-2-2022",
          year: 2022,
          rating: 8.5,
          runtime: 140,
          genres: ["Crime", "Drama", "Mystery", "Thriller"],
          summary:
            "A drug deal goes wrong between two peddlers where one named David accidentally shoots other while trying to escape he notices Vijay Salgaonkar coming out of under construction police station after hiding something.Seven years later Vijay lives happily with his family, along with his cable business he also owns a cinema hall and plans to produce his own film.Mahesh Deshmukh comes to meet Vijay asking him for final remains of his son but goes distressed on the other hand IG Meera Deshmukh has still not forgiven Vijay and waits for evidence.IG Tarun Alhawat colleague of Meera is posted sometime back in Goa and tries to re investigate Sam's case by getting suspended officer Gaitonde back on duty.Tarun and Meera lay a trap on Vijay and his family but very much far away from getting any clue.",
          description_full:
            "A drug deal goes wrong between two peddlers where one named David accidentally shoots other while trying to escape he notices Vijay Salgaonkar coming out of under construction police station after hiding something.Seven years later Vijay lives happily with his family, along with his cable business he also owns a cinema hall and plans to produce his own film.Mahesh Deshmukh comes to meet Vijay asking him for final remains of his son but goes distressed on the other hand IG Meera Deshmukh has still not forgiven Vijay and waits for evidence.IG Tarun Alhawat colleague of Meera is posted sometime back in Goa and tries to re investigate Sam's case by getting suspended officer Gaitonde back on duty.Tarun and Meera lay a trap on Vijay and his family but very much far away from getting any clue.",
          synopsis:
            "A drug deal goes wrong between two peddlers where one named David accidentally shoots other while trying to escape he notices Vijay Salgaonkar coming out of under construction police station after hiding something.Seven years later Vijay lives happily with his family, along with his cable business he also owns a cinema hall and plans to produce his own film.Mahesh Deshmukh comes to meet Vijay asking him for final remains of his son but goes distressed on the other hand IG Meera Deshmukh has still not forgiven Vijay and waits for evidence.IG Tarun Alhawat colleague of Meera is posted sometime back in Goa and tries to re investigate Sam's case by getting suspended officer Gaitonde back on duty.Tarun and Meera lay a trap on Vijay and his family but very much far away from getting any clue.",
          yt_trailer_code: "cxA2y9Tgl7o",
          language: "hi",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/drishyam_2_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/drishyam_2_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/drishyam_2_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/drishyam_2_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/drishyam_2_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/4E0814ECA320C3027DE83FDD4B76EFE4A100BCDA",
              hash: "4E0814ECA320C3027DE83FDD4B76EFE4A100BCDA",
              quality: "720p",
              type: "bluray",
              seeds: 45,
              peers: 10,
              size: "1.26 GB",
              size_bytes: 1352914698,
              date_uploaded: "2022-12-09 02:19:08",
              date_uploaded_unix: 1670548748,
            },
            {
              url: "https://yts.mx/torrent/download/C9DD112B621BF78D47BF7D614030A53072C63695",
              hash: "C9DD112B621BF78D47BF7D614030A53072C63695",
              quality: "1080p",
              type: "bluray",
              seeds: 61,
              peers: 26,
              size: "2.33 GB",
              size_bytes: 2501818450,
              date_uploaded: "2022-12-09 04:52:47",
              date_uploaded_unix: 1670557967,
            },
          ],
          date_uploaded: "2022-12-09 02:19:08",
          date_uploaded_unix: 1670548748,
        },
        {
          id: 47154,
          url: "https://yts.mx/movies/dio-dreamers-never-die-2022",
          imdb_code: "tt11851698",
          title: "Dio: Dreamers Never Die",
          title_english: "Dio: Dreamers Never Die",
          title_long: "Dio: Dreamers Never Die (2022)",
          slug: "dio-dreamers-never-die-2022",
          year: 2022,
          rating: 8.5,
          runtime: 127,
          genres: ["Biography", "Documentary", "Music"],
          summary:
            "The first career spanning documentary on the heavy metal vocalist to be authorized by the artist's estate includes scenes with peers, family and friends; never before seen footage; personal photos.",
          description_full:
            "The first career spanning documentary on the heavy metal vocalist to be authorized by the artist's estate includes scenes with peers, family and friends; never before seen footage; personal photos.",
          synopsis:
            "The first career spanning documentary on the heavy metal vocalist to be authorized by the artist's estate includes scenes with peers, family and friends; never before seen footage; personal photos.",
          yt_trailer_code: "nrB_wPHV9BA",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/dio_dreamers_never_die_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/dio_dreamers_never_die_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/dio_dreamers_never_die_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/dio_dreamers_never_die_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/dio_dreamers_never_die_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/8F7C4E5CD41D032E3E9E59952616C8BAC7595A07",
              hash: "8F7C4E5CD41D032E3E9E59952616C8BAC7595A07",
              quality: "720p",
              type: "web",
              seeds: 17,
              peers: 4,
              size: "1.04 GB",
              size_bytes: 1116691497,
              date_uploaded: "2022-12-02 07:46:26",
              date_uploaded_unix: 1669963586,
            },
            {
              url: "https://yts.mx/torrent/download/E6AFF35772440897FA447C58597ECCCB39F28299",
              hash: "E6AFF35772440897FA447C58597ECCCB39F28299",
              quality: "1080p",
              type: "web",
              seeds: 31,
              peers: 8,
              size: "2.13 GB",
              size_bytes: 2287070085,
              date_uploaded: "2022-12-02 08:56:22",
              date_uploaded_unix: 1669967782,
            },
            {
              url: "https://yts.mx/torrent/download/E17D6311FDC5DEFD2EA4932097F2569C330FB7DA",
              hash: "E17D6311FDC5DEFD2EA4932097F2569C330FB7DA",
              quality: "2160p",
              type: "web",
              seeds: 24,
              peers: 5,
              size: "5.17 GB",
              size_bytes: 5551245230,
              date_uploaded: "2022-12-16 23:56:33",
              date_uploaded_unix: 1671231393,
            },
          ],
          date_uploaded: "2022-12-02 07:46:26",
          date_uploaded_unix: 1669963586,
        },
        {
          id: 46855,
          url: "https://yts.mx/movies/year-of-the-dogs-1997",
          imdb_code: "tt0133282",
          title: "Year of the Dogs",
          title_english: "Year of the Dogs",
          title_long: "Year of the Dogs (1997)",
          slug: "year-of-the-dogs-1997",
          year: 1997,
          rating: 8.5,
          runtime: 85,
          genres: ["Action", "Documentary", "Sport"],
          summary:
            "Year of the Dogs is a documentary detailing the turbulent 1996 season of the Australian Football League (AFL) team Footscray Football Club (now Western Bulldogs).",
          description_full:
            "Year of the Dogs is a documentary detailing the turbulent 1996 season of the Australian Football League (AFL) team Footscray Football Club (now Western Bulldogs).",
          synopsis:
            "Year of the Dogs is a documentary detailing the turbulent 1996 season of the Australian Football League (AFL) team Footscray Football Club (now Western Bulldogs).",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/year_of_the_dogs_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/year_of_the_dogs_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/year_of_the_dogs_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/year_of_the_dogs_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/year_of_the_dogs_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/EC087F88F8BB50436AC6365B4A9FCDBF1F2FBD8D",
              hash: "EC087F88F8BB50436AC6365B4A9FCDBF1F2FBD8D",
              quality: "720p",
              type: "web",
              seeds: 1,
              peers: 2,
              size: "790.68 MB",
              size_bytes: 829088072,
              date_uploaded: "2022-11-21 14:36:32",
              date_uploaded_unix: 1669037792,
            },
            {
              url: "https://yts.mx/torrent/download/9BC6FBF7F8EDD6F3804A4B5458DE8D6DCDE991A2",
              hash: "9BC6FBF7F8EDD6F3804A4B5458DE8D6DCDE991A2",
              quality: "1080p",
              type: "web",
              seeds: 3,
              peers: 0,
              size: "1.43 GB",
              size_bytes: 1535450808,
              date_uploaded: "2022-11-21 15:45:33",
              date_uploaded_unix: 1669041933,
            },
          ],
          date_uploaded: "2022-11-21 14:36:32",
          date_uploaded_unix: 1669037792,
        },
        {
          id: 46471,
          url: "https://yts.mx/movies/jeronimo-2019",
          imdb_code: "tt9000128",
          title: "Jeronimo",
          title_english: "Jeronimo",
          title_long: "Jeronimo (2019)",
          slug: "jeronimo-2019",
          year: 2019,
          rating: 8.6,
          runtime: 93,
          genres: ["Biography", "Documentary", "History"],
          summary:
            "Born to Korean immigrant parents freed from indentured servitude in early twentieth century Mexico, Jerónimo Lim Kim joins the Cuban Revolution with his law school classmate Fidel Castro and becomes an accomplished government official in the Castro regime, until he rediscovers his ethnic roots and dedicates his later life to reconstructing his Korean Cuban identity. After Jerónimo's death, younger Korean Cubans recognize his legacy, but it is not until they are presented with the opportunity to visit South Korea that questions about their mixed identity resurface.",
          description_full:
            "Born to Korean immigrant parents freed from indentured servitude in early twentieth century Mexico, Jerónimo Lim Kim joins the Cuban Revolution with his law school classmate Fidel Castro and becomes an accomplished government official in the Castro regime, until he rediscovers his ethnic roots and dedicates his later life to reconstructing his Korean Cuban identity. After Jerónimo's death, younger Korean Cubans recognize his legacy, but it is not until they are presented with the opportunity to visit South Korea that questions about their mixed identity resurface.",
          synopsis:
            "Born to Korean immigrant parents freed from indentured servitude in early twentieth century Mexico, Jerónimo Lim Kim joins the Cuban Revolution with his law school classmate Fidel Castro and becomes an accomplished government official in the Castro regime, until he rediscovers his ethnic roots and dedicates his later life to reconstructing his Korean Cuban identity. After Jerónimo's death, younger Korean Cubans recognize his legacy, but it is not until they are presented with the opportunity to visit South Korea that questions about their mixed identity resurface.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/jeronimo_2019/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/jeronimo_2019/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/jeronimo_2019/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/jeronimo_2019/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/jeronimo_2019/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/06FEBA482E0549D973A9EE732222626098B8DFDA",
              hash: "06FEBA482E0549D973A9EE732222626098B8DFDA",
              quality: "720p",
              type: "web",
              seeds: 3,
              peers: 0,
              size: "854.85 MB",
              size_bytes: 896375194,
              date_uploaded: "2022-11-08 17:54:43",
              date_uploaded_unix: 1667926483,
            },
            {
              url: "https://yts.mx/torrent/download/0402648209EC0EC249D32AE05625E4E83EEA0CD2",
              hash: "0402648209EC0EC249D32AE05625E4E83EEA0CD2",
              quality: "1080p",
              type: "web",
              seeds: 2,
              peers: 1,
              size: "1.55 GB",
              size_bytes: 1664299827,
              date_uploaded: "2022-11-08 18:56:26",
              date_uploaded_unix: 1667930186,
            },
          ],
          date_uploaded: "2022-11-08 17:54:43",
          date_uploaded_unix: 1667926483,
        },
        {
          id: 46035,
          url: "https://yts.mx/movies/the-big-steppers-tour-live-from-paris-2022",
          imdb_code: "tt22940628",
          title: "The Big Steppers Tour: Live from Paris",
          title_english: "The Big Steppers Tour: Live from Paris",
          title_long: "The Big Steppers Tour: Live from Paris (2022)",
          slug: "the-big-steppers-tour-live-from-paris-2022",
          year: 2022,
          rating: 8.6,
          runtime: 112,
          genres: ["Music"],
          summary: "",
          description_full: "",
          synopsis: "",
          yt_trailer_code: "ayGI1pg2wtM",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/the_big_steppers_tour_live_from_paris_2022/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/the_big_steppers_tour_live_from_paris_2022/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/the_big_steppers_tour_live_from_paris_2022/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/the_big_steppers_tour_live_from_paris_2022/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/the_big_steppers_tour_live_from_paris_2022/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/BF3E36D67D9C4A8877F1BB13A09BF0C43CEE2029",
              hash: "BF3E36D67D9C4A8877F1BB13A09BF0C43CEE2029",
              quality: "720p",
              type: "web",
              seeds: 6,
              peers: 2,
              size: "1 GB",
              size_bytes: 1073741824,
              date_uploaded: "2022-10-23 19:44:33",
              date_uploaded_unix: 1666547073,
            },
            {
              url: "https://yts.mx/torrent/download/DB732085B150C8226B8D02F2D36E55AB043D63BD",
              hash: "DB732085B150C8226B8D02F2D36E55AB043D63BD",
              quality: "1080p",
              type: "web",
              seeds: 17,
              peers: 1,
              size: "1.86 GB",
              size_bytes: 1997159793,
              date_uploaded: "2022-10-23 20:58:02",
              date_uploaded_unix: 1666551482,
            },
          ],
          date_uploaded: "2022-10-23 19:44:33",
          date_uploaded_unix: 1666547073,
        },
      ],
    },
    "@meta": {
      server_time: 1674105917,
      server_timezone: "CET",
      api_version: 2,
      execution_time: "0.01 ms",
    },
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
