import { Image as ExpoImage } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// Dummy data
const newsData = [
  {
    id: "1",
    user: "Petter Jognston",
    title: "Bangladesh ICT & Innovation Awards 2025",
    image:
      "https://images.unsplash.com/photo-1758654307553-f067f0367f13?q=80&w=800&auto=format&fit=crop",
    comments: [
      {
        id: "c1",
        user: "Ali",
        text: "Great event!",
        replies: [{ id: "r1", user: "Sara", text: "Agree!" }],
      },
    ],
  },
  {
    id: "2",
    user: "Sarah Khan",
    title: "Future of AI in Bangladesh",
    image:
      "https://images.unsplash.com/photo-1758642882005-447873fd2d29?q=80&w=687&auto=format&fit=crop",
    comments: [],
  },
];

export default function PostDetailsPage() {
  const { id } = useLocalSearchParams();
  const post = newsData.find((n) => n.id === id);

  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState(false);

  const scale = useSharedValue(1);

  const addComment = (text, parentId = null) => {
    if (!text.trim()) return;

    const newC = { id: Date.now().toString(), user: "You", text, replies: [] };

    if (parentId) {
      setComments((prev) =>
        prev.map((c) =>
          c.id === parentId ? { ...c, replies: [...c.replies, newC] } : c
        )
      );
    } else {
      setComments((prev) => [...prev, newC]);
    }
    setNewComment("");
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const renderComment = ({ item }) => (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ fontWeight: "bold" }}>{item.user}</Text>
      <Text>{item.text}</Text>
      {item.replies.map((r) => (
        <View key={r.id} style={{ marginLeft: 16, marginTop: 4 }}>
          <Text style={{ fontWeight: "bold" }}>{r.user}</Text>
          <Text>{r.text}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={() => addComment("you addded a replay", item.id)}>
        <Text style={{ color: "blue", marginTop: 4 }}>Reply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
        {post.title}
      </Text>
      <TouchableOpacity onPress={() => setSelectedImage(post.image)}>
        <ExpoImage
          source={{ uri: post.image }}
          style={{ width: "100%", height: 300, borderRadius: 12 }}
          contentFit="cover"
        />
      </TouchableOpacity>

      {/* Like Button */}
      <TouchableOpacity
        onPress={() => setLiked(!liked)}
        style={{ marginTop: 8 }}
      >
        <Text style={{ color: liked ? "red" : "gray", fontWeight: "bold" }}>
          {liked ? "❤️ Liked" : "♡ Like"}
        </Text>
      </TouchableOpacity>

      <Text style={{ fontWeight: "bold", marginVertical: 12 }}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
      />

      {/* Add Comment */}
      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment..."
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 8,
            flex: 1,
          }}
        />
        <TouchableOpacity
          onPress={() => addComment(newComment)}
          style={{ marginLeft: 8, justifyContent: "center" }}
        >
          <Text style={{ color: "blue", fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Zoomable Image Modal */}
      <Modal visible={!!selectedImage} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.9)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", top: 50, right: 20 }}
            onPress={() => {
              scale.value = withSpring(1);
              setSelectedImage(null);
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Close</Text>
          </TouchableOpacity>

          <PinchGestureHandler
            onGestureEvent={(e) => (scale.value = e.nativeEvent.scale)}
          >
            <Animated.View style={animatedStyle}>
              <ExpoImage
                source={{ uri: selectedImage }}
                style={{
                  width: Dimensions.get("window").width * 0.9,
                  height: 400,
                }}
                contentFit="contain"
              />
            </Animated.View>
          </PinchGestureHandler>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
}
