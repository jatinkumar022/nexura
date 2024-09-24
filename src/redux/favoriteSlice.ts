// favoritesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFavorites, addUserFavorite, removeUserFavorite } from "./api"; // Replace with your actual API methods

interface FavoritesState {
  favorites: string[]; // Array of product IDs
  loading: boolean;
}

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
};

export const fetchUserFavorites = createAsyncThunk(
  "favorites/fetchUserFavorites",
  async (userId: string) => {
    return await getUserFavorites(userId);
  }
);

export const toggleUserFavorite = createAsyncThunk(
  "favorites/toggleUserFavorite",
  async ({ userId, productId }: { userId: string; productId: string }) => {
    const isFavorite = await getUserFavorites(userId).then((favorites) =>
      favorites.includes(productId)
    );

    if (isFavorite) {
      await removeUserFavorite(userId, productId);
    } else {
      await addUserFavorite(userId, productId);
    }

    return { productId, isFavorite: !isFavorite };
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
    builder.addCase(toggleUserFavorite.fulfilled, (state, action) => {
      const { productId, isFavorite } = action.payload;
      if (isFavorite) {
        state.favorites.push(productId);
      } else {
        state.favorites = state.favorites.filter((id) => id !== productId);
      }
    });
  },
});

export default favoritesSlice.reducer;
