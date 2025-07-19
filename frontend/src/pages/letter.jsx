import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Heart, ChevronsLeft, ChevronsRight, Bold, Italic, Underline } from "lucide-react";
import API from "../Api";
import Header from "../components/header";
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

const LetterPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    message: "",
    selectedCategory: "Anime",
  });
  const [currentTheme, setCurrentTheme] = useState("rosy");
  const [open, setOpen] = useState(false);

  // Retrieve email from localStorage on component mount
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setFormData((prev) => ({ ...prev, email: userEmail }));
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>]/g, "").trim();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };

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
    e.preventDefault();

    if (!formData.email || !formData.message || !formData.date) {
      alert("Please fill in all required fields, including date");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email address");
      return;
    }

    // Set default time to 9:00 AM
    const date = dayjs(formData.date);
    const scheduledDateTime = date
      .set("hour", 9)
      .set("minute", 0)
      .set("second", 0)
      .toISOString();

    try {
      const payload = {
        email: formData.email,
        content: formData.message,
        scheduledDate: scheduledDateTime,
        category: formData.selectedCategory,
      };
      const res = await API.post("/letters", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Letter scheduled successfully!");
      console.log("Saved:", res.data);
      setFormData({ name: "", email: formData.email, date: null, message: "", selectedCategory: "Anime" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("Failed to schedule letter");
    }
  };

  const themeItems = Object.entries(themes).map(([key, value]) => ({
    icon: value.icon,
    text: key.charAt(0).toUpperCase() + key.slice(1),
    key,
    onClick: () => setCurrentTheme(key),
  }));

  const categories = [
    {
      name: "Anime",
      mainImage: "/gojo.png",
      sideImages: [
        "/hitori.jpg",
        "/naruto.png",
        "/gojo.png",
        "/hitori.jpg",
        "/naruto.png",
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
                <div className="flex-1">
                  <div
                    className="flex flex-col rounded-2xl border shadow-lg overflow-hidden min-h-full"
                    style={{
                      backgroundColor: themes[currentTheme].bg,
                      borderColor: currentTheme === "white" ? "#e5e7eb" : "rgba(255,255,255,0.3)",
                    }}
                  >
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
                    <div className="p-4 flex-1">
                      {/* <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          readOnly
                          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-black/20 text-white focus:outline-none"
                          aria-label="User email"
                        />
                      </div> */}
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
                <div className="min-w-[400px] lg:w-80 flex flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-4 text-white">Choose Anime</h3>
                    <div className="flex flex-col gap-4">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className={`rounded-xl overflow-hidden shadow-lg pb-8 ${
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </Box>
    </LocalizationProvider>
  );
};

export default LetterPage;
