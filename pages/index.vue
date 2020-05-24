<template>
    <v-navigation-drawer width="500" height="auto">
        <v-card class="light overflow-y-auto">
            <v-container class="px-0 py-0 d-flex justify-center">
                <search-user-place
                    class="mt-2 mx-auto"
                    style="position: absolute; z-index: 1"
                />
                <v-img
                    width="100%"
                    height="200"
                    src="https://lh5.googleusercontent.com/p/AF1QipMfiD7stRd9zdc-138Dn1PbrHwbMDr05f7zjmkr=w408-h578-k-no"
                />
            </v-container>
            <v-list-item two-line>
                <v-list-item-icon>
                    <v-icon color="primary">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">
                        Tìm Xung Quanh
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-2">
                        <span class="text--primary">CMC Tower</span> &mdash; 11
                        Duy Tân, Cầu Giấy, Hà Nội
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-toolbar dense light extended flat class="mt-4">
                <v-list-item class="pa-0">
                    <v-list-item-icon>
                        <v-icon color="primary">mdi-map-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="font-weight-bold">
                        Lựa Chọn Tìm Kiếm
                    </v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-btn small color="primary" class="mr-4">
                        <v-icon left>mdi-magnify</v-icon>
                        Tìm
                    </v-btn>
                </v-list-item>
            </v-toolbar>
            <v-card
                class="mx-auto px-4 py-4"
                max-width="430"
                style="margin-top: -30px"
                color="grey lighten-3"
                elevation="8"
            >
                <v-row align="center" justify="start" class="mx-1">
                    <v-col class="shrink">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip
                                    small
                                    close
                                    color="green"
                                    class="white--text"
                                    v-on="on"
                                    @click="
                                        showSearchOptions = !showSearchOptions
                                    "
                                >
                                    <strong>Ấm Siêu Tốc</strong>
                                </v-chip>
                            </template>
                            <span>Từ Khóa</span>
                        </v-tooltip>
                    </v-col>
                    <v-col class="shrink">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip
                                    small
                                    close
                                    color="orange"
                                    class="white--text"
                                    v-on="on"
                                >
                                    <strong>1km</strong>
                                </v-chip>
                            </template>
                            <span>Bán Kính Tìm Kiếm</span>
                        </v-tooltip>
                    </v-col>
                    <v-col class="shrink">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip
                                    small
                                    close
                                    color="teal"
                                    class="white--text"
                                    v-on="on"
                                >
                                    <strong>Mỹ Phẩm</strong>
                                </v-chip>
                            </template>
                            <span>Danh Mục</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <v-expand-transition>
                    <v-container class="pa-0" v-show="showSearchOptions">
                        <v-list-item class="py-0">
                            <v-list-item-icon>
                                <v-icon color="primary"
                                    >mdi-map-marker-radius</v-icon
                                >
                            </v-list-item-icon>
                            <v-list-item-title class="font-weight-bold">
                                Bán Kính Tìm Kiếm
                            </v-list-item-title>
                        </v-list-item>
                        <v-chip-group
                            active-class="primary white--text"
                            class="ml-12 pl-5"
                            column
                        >
                            <v-chip><strong>500m</strong></v-chip>
                            <v-chip><strong>1km</strong></v-chip>
                            <v-chip><strong>2km</strong></v-chip>
                            <v-chip><strong>3km</strong></v-chip>
                        </v-chip-group>
                        <v-list-item class="py-0">
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-layers-search
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="font-weight-bold">
                                Tìm Theo
                            </v-list-item-title>
                        </v-list-item>
                        <v-tabs height="30">
                            <v-tab class="pa-0 ml-12 px-6">
                                <strong>Từ Khóa</strong>
                            </v-tab>
                            <v-tab class="pa-0 ml-12 px-6">
                                <strong>Danh Mục</strong>
                            </v-tab>
                            <v-tab-item>
                                <v-text-field
                                    clearable
                                    class="mx-12"
                                    prepend-inner-icon="mdi-magnify"
                                    placeholder="Nhập từ khóa mặt hàng"
                                />
                            </v-tab-item>
                            <v-tab-item>
                                <v-slide-group class="pa-4" show-arrows>
                                    <v-slide-item>
                                        <v-card
                                            class="ma-4"
                                            height="100"
                                            width="100"
                                        >
                                        </v-card>
                                    </v-slide-item>
                                    <v-slide-item>
                                        <v-card
                                            class="ma-4"
                                            height="100"
                                            width="100"
                                        >
                                        </v-card>
                                    </v-slide-item>
                                    <v-slide-item>
                                        <v-card
                                            class="ma-4"
                                            height="100"
                                            width="100"
                                        >
                                        </v-card>
                                    </v-slide-item>
                                    <v-slide-item>
                                        <v-card
                                            class="ma-4"
                                            height="100"
                                            width="100"
                                        >
                                        </v-card>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-tab-item>
                        </v-tabs>
                    </v-container>
                </v-expand-transition>
            </v-card>
            <v-divider class="mt-8" />
            <v-toolbar dense light extended flat class="mt-4">
                <v-list-item class="pa-0">
                    <v-list-item-icon>
                        <v-icon color="primary">mdi-view-list</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="font-weight-bold">
                        Kết Quả Tìm Kiếm
                    </v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-apps</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-list-item>
            </v-toolbar>
            <v-card height="200" width="100%"></v-card>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
import SearchUserPlace from '../components/SearchUserPlace'
export default {
    components: { SearchUserPlace },
    data() {
        return {
            searchModes: ['By Keyword', 'By Category'],
            showSearchOptions: true
        }
    }
}
</script>

<style scoped>
.light::-webkit-scrollbar {
    width: 5px;
}

.light::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: solid 3px #e6e6e6;
    border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
    background: black;
}

.dark::-webkit-scrollbar {
    width: 15px;
}

.dark::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 3px #202020;
    border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
    background: white;
}
</style>
