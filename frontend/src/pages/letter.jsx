import React, { useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Sun, Moon, Heart, ChevronsLeft, ChevronsRight, Bold, Italic, Underline } from "lucide-react";
=======
import { Sun, Moon, Heart } from "lucide-react";
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
import API from "../Api";
import Header from "../components/Header";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  styled,
  useTheme,
  Divider,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { LocalizationProvider, DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// Theme configuration
const themes = {
  dark: {
    bg: "#1a1a1a",
    text: "#ffffff",
    icon: <Moon size={18} />,
  },
  white: {
    bg: "#ffffff",
    text: "#000000",
    icon: <Sun size={18} />,
  },
  rosy: {
    bg: "#fff0f5",
    text: "#4b0082",
    icon: <Heart size={18} />,
  },
};

<<<<<<< HEAD
// Formatting buttons for the toolbar
const formatButtons = [
  { icon: <Bold size={16} />, tooltip: "Bold" },
  { icon: <Italic size={16} />, tooltip: "Italic" },
  { icon: <Underline size={16} />, tooltip: "Underline" },
];

// Styled components for MUI Mini Variant Drawer
const drawerWidth = 240;
const miniDrawerWidth = 60;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `${miniDrawerWidth}px`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MiniDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    },
  }),
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${miniDrawerWidth}px`,
    ...(open && {
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const HeaderWrapper = styled("div", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    position: "fixed",
    top: 0,
    left: `${miniDrawerWidth}px`,
    right: 0,
    zIndex: theme.zIndex.appBar,
    transition: theme.transitions.create("left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      left: `${drawerWidth}px`,
      transition: theme.transitions.create("left", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

=======
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
const LetterPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    time: dayjs().startOf("hour"),
    message: "",
<<<<<<< HEAD
    selectedCategory: "Beauty",
  });
  const [currentTheme, setCurrentTheme] = useState("rosy");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
=======
  });
  const [theme, setTheme] = useState("rosy");
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>]/g, "").trim();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };

<<<<<<< HEAD
  const handleDateChange = (newDate) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: newDate,
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCategory: category,
    }));
  };

=======
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
  const inspireMessages = [
    "🌸 Keep blooming, even in the dark.",
    "🚀 You're stronger than you think.",
    "💫 Your future self is proud of you.",
    "🔥 Nothing can dim your light.",
  ];

  const handleInspire = () => {
    const random = Math.floor(Math.random() * inspireMessages.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      message: inspireMessages[random],
    }));
  };

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    e.preventDefault();

    if (!formData.email || !formData.message || !formData.date || !formData.time) {
      alert("Please fill in all required fields, including date and time");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const date = dayjs(formData.date);
    const time = dayjs(formData.time);
    const scheduledDateTime = date
      .set("hour", time.hour())
      .set("minute", time.minute())
      .set("second", 0)
      .toISOString();

    try {
      const payload = {
        email: formData.email,
        content: formData.message,
        scheduledDate: scheduledDateTime,
        category: formData.selectedCategory,
      };
      const res = await API.post("/letters", payload);
      alert("Letter sent successfully!");
      console.log("Saved:", res.data);
      setFormData({ name: "", email: "", date: null, time: null, message: "", selectedCategory: "Beauty" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("Failed to send letter");
    }
  };

  const themeItems = Object.entries(themes).map(([key, value]) => ({
    icon: value.icon,
    text: key.charAt(0).toUpperCase() + key.slice(1),
    key,
    onClick: () => setCurrentTheme(key),
  }));

  // Image selector categories and sample images
  const categories = [
    {
      name: "Beauty",
      mainImage: "/gojo.png",
      sideImages: [
        "/gojo.png",
        "/gojo.png",
        "/gojo.png",
      ],
    },
    {
      name: "Nature",
      mainImage: "/gojo.png",
      sideImages: [
        "/gojo.png",
        "/gojo.png",
        "/gojo.png",
      ],
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderWrapper open={open}>
          <Header />
        </HeaderWrapper>
        <MiniDrawer variant="permanent" open={open}>
          <DrawerHeader>
            <Tooltip title={open ? "Close Drawer" : "Open Drawer"} placement="right">
              <IconButton
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                sx={{ color: "#ffffff" }}
                aria-label={open ? "Close drawer" : "Open drawer"}
=======
  e.preventDefault();

  try {
    const payload = {
      email: formData.email,
      content: formData.message,
      scheduledDate: formData.date,
    };

    const res = await API.post("/letters", payload); // 🔗 sending to backend
    alert("Letter sent successfully!");
    console.log("Saved:", res.data);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      date: "",
      message: "",
    });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    alert("Failed to send letter");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d882ca] via-[#fce3ff] to-[#f980e3] flex flex-col items-center justify-center font-poppins px-4 py-12">
      {/* Quote */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-black">
        💭 "Dear me, I hope you’re smiling today. Remember, you planted this seed."
      </h2>

      {/* Container */}
      <div className="w-full max-w-6xl p-4 sm:p-6 rounded-3xl border border-dashed border-pink-400 bg-gradient-to-br from-purple-600 via-pink-500 to-black shadow-lg">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Message Box */}
          <div
            className="flex-1 rounded-2xl border border-white/30 p-4 transition-all duration-300"
            style={{
              backgroundColor: themes[theme].bg,
              color: themes[theme].text,
            }}
          >
            <h3 className="text-center text-lg font-semibold mb-2">Mail Box 📬</h3>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your heartfelt message..."
              rows={10}
              className="w-full h-full bg-transparent border-none outline-none resize-none text-base"
              style={{ color: themes[theme].text }}
            />

            {/* Theme Icons + Inspire */}
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-sm text-white">Theme:</span>
              {Object.entries(themes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  className={`w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow transition hover:scale-105 ${
                    theme === key ? "ring-2 ring-yellow-300" : ""
                  }`}
                >
                  {value.icon}
                </button>
              ))}

              <button
                onClick={handleInspire}
                className="bg-yellow-200 text-black text-xs px-3 py-1 rounded-md shadow hover:bg-yellow-300"
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
              >
                {open ? <ChevronsLeft size={24} /> : <ChevronsRight size={24} />}
              </IconButton>
            </Tooltip>
          </DrawerHeader>
          <Divider sx={{ borderColor: "#333" }} />
          <List>
            {themeItems.map((item) => (
              <ListItem key={item.key} disablePadding sx={{ display: "block" }}>
                <Tooltip title={!open ? item.text : ""} placement="right">
                  <ListItemButton
                    onClick={item.onClick}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      backgroundColor: currentTheme === item.key ? "#444" : "transparent",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "#ffffff",
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </MiniDrawer>
        <Main open={open}>
          <DrawerHeader />
          <div className="min-h-screen flex flex-col items-center justify-center font-poppins px-4 py-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white">
              💭 "Dear me, I hope you're smiling today. Remember, you planted this seed."
            </h2>
            <div className="w-full max-w-6xl bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 p-6 rounded-3xl border border-dashed border-pink-400 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Mail Box Area */}
                <div className="flex-1">
                  <div
                    className="flex flex-col rounded-2xl border shadow-lg overflow-hidden min-h-full"
                    style={{
                      backgroundColor: themes[currentTheme].bg,
                      borderColor: currentTheme === "white" ? "#e5e7eb" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {/* Header */}
                    <div
                      className="px-4 py-3 border-b"
                      style={{
                        borderColor: currentTheme === "white" ? "#e5e7eb" : "rgba(255,255,255,0.2)",
                        backgroundColor: currentTheme === "white" ? "#f9fafb" : "rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.02 }}
                          onClick={handleSubmit}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-lg flex items-center gap-2"
                          aria-label="Send letter"
                        >
                          Send
                        </motion.button>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="p-4 flex-1">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your heartfelt message..."
                        rows={15}
                        className="w-full bg-transparent border-none outline-none resize-none text-base leading-relaxed"
                        style={{
                          color: themes[currentTheme].text,
                        }}
                        aria-label="Message input"
                        required
                      />
                    </div>

                    {/* Formatting Toolbar */}
                    <div
                      className="px-4 py-2 border-b flex flex-wrap gap-1"
                      style={{
                        borderColor: currentTheme === "white" ? "#e5e7eb" : "rgba(255,255,255,0.2)",
                        backgroundColor: currentTheme === "white" ? "#f9fafb" : "rgba(0,0,0,0.05)",
                      }}
                    >
                      {formatButtons.map((btn, index) => (
                        <button
                          key={index}
                          className="p-2 rounded hover:bg-gray-200 transition-colors"
                          style={{
                            color: themes[currentTheme].text,
                            backgroundColor: "transparent",
                          }}
                          title={btn.tooltip}
                          aria-label={btn.tooltip}
                          onClick={() => console.log(`${btn.tooltip} clicked`)}
                        >
                          {btn.icon}
                        </button>
                      ))}
                      <div className="ml-4 flex items-center gap-2">
                        <select
                          className="text-sm border rounded px-2 py-1"
                          style={{
                            backgroundColor: themes[currentTheme].bg,
                            color: themes[currentTheme].text,
                            borderColor: currentTheme === "white" ? "#d1d5db" : "rgba(255,255,255,0.3)",
                          }}
                          onChange={handleChange}
                          name="font"
                          aria-label="Select font type"
                        >
                          <option value="Sans Serif">Sans Serif</option>
                          <option value="Serif">Serif</option>
                          <option value="Monospace">Monospace</option>
                        </select>
                      </div>

                      {/* Suggestion button */}
                      <button
                        onClick={handleInspire}
                        className="bg-yellow-200 text-black text-sm px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition-colors font-medium"
                        aria-label="Inspire me"
                      >
                        ✨ Inspire Me
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="min-w-[400px] lg:w-80 flex flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    {/* Date Picker */}
                    {isMobile ? (
                      <MobileDatePicker
                        value={formData.date}
                        onChange={handleDateChange}
                        slotProps={{
                          textField: {
                            required: true,
                            className:
                              "w-full px-4 py-3 rounded-xl border border-white/30 bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm",
                            InputProps: {
                              style: {
                                color: themes[currentTheme].text,
                                fontFamily: "Poppins",
                              },
                            },
                            InputLabelProps: {
                              style: {
                                color: themes[currentTheme].text,
                              },
                            },
                          },
                        }}
                        aria-label="Scheduled date"
                        label="Select Date"
                      />
                    ) : (
                      <DesktopDatePicker
                        value={formData.date}
                        onChange={handleDateChange}
                        slotProps={{
                          textField: {
                            required: true,
                            className:
                              "w-full px-4 py-3 rounded-xl border border-white/30 bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm",
                            InputProps: {
                              style: {
                                color: themes[currentTheme].text,
                                fontFamily: "Poppins",
                              },
                            },
                            InputLabelProps: {
                              style: {
                                color: themes[currentTheme].text,
                              },
                            },
                          },
                        }}
                        aria-label="Scheduled date"
                        label="Select Date"
                      />
                    )}
                  </div>

                  {/* Image Selector with Swiper */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-4 text-white">Select Category</h3>
                    <div className="flex flex-col gap-4">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className={`cursor-pointer rounded-xl overflow-hidden shadow-lg ${
                            formData.selectedCategory === category.name ? "border-2 border-purple-400" : ""
                          }`}
                          onClick={() => handleCategoryChange(category.name)}
                        >
                          {category.sideImages.length > 0 ? (
                            <Swiper
                              effect="cards"
                              grabCursor={true}
                              centeredSlides={true}
                              loop={category.sideImages.length > 1}
                              lazyPreload={true}
                              className="w-[240px] h-[320px]"
                              modules={[EffectCards]}
                            >
                              {category.sideImages.map((img, index) => (
                                <SwiperSlide key={index} className="rounded-[18px] overflow-hidden">
                                  <img
                                    src={img}
                                    alt={`${category.name} image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      console.error(`Failed to load image: ${img}`);
                                      e.target.src = "/images/fallback.png";
                                    }}
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          ) : (
                            <div className="w-[240px] h-[320px] flex items-center justify-center bg-gray-200 rounded-[18px]">
                              <span className="text-gray-500">No images available</span>
                            </div>
                          )}
                          <div className="flex justify-between text-white px-2 py-1">
                            <span className="font-bold text-lg">{category.name}</span>
                            <span className="text-sm">TO INSPIRE YOU</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </Main>
      </Box>
    </LocalizationProvider>
=======

          {/* Input Fields */}
          <div className="w-full sm:w-64 flex flex-col justify-between items-center gap-4">
            <img
              src="/hitori.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-xl object-cover border border-white/40 shadow-md"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#080808] text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none"
            />

            <motion.button
              onClick={handleSubmit}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md"
            >
              Send 🚀
            </motion.button>
          </div>
        </div>
      </div>
    </div>
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
  );
};

export default LetterPage;