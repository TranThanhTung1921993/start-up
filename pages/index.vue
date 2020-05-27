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
            <v-divider/>
            <v-toolbar dense light extended flat class="mt-4">
                <v-list-item class="pa-0">
                    <v-list-item-icon>
                        <v-icon color="primary">mdi-map-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="font-weight-bold">
                        Lựa Chọn Tìm Kiếm
                    </v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-btn small color="primary" class="mr-4" elevation="8">
                        <v-icon left>mdi-magnify</v-icon>
                        Tìm
                    </v-btn>
                </v-list-item>
            </v-toolbar>
            <v-card
                class="mx-auto px-4 mt-n10"
                max-width="430"
                style="margin-top: -30px"
                elevation="8"
            >
                <v-expand-transition>
                    <v-container class="pa-0" v-show="showSearchOptions">
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
                                <v-list-item class="py-0 ml-8">
                                    <v-list-item-title class="font-weight-bold">
                                        Từ Khóa Hot
                                    </v-list-item-title>
                                </v-list-item>
                                <v-slide-group show-arrows>
                                    <v-slide-item v-for="(keyword, key) in hotKeywords" :key="key">
                                        <v-card elevation="8" class="ma-4" height="50" width="150"
                                                :color="randomColor[key]">
                                            <v-card-subtitle class="white--text font-weight-bold caption">
                                                {{ keyword }}
                                            </v-card-subtitle>
                                        </v-card>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-tab-item>
                            <v-tab-item>
                                <v-slide-group class="pa-4" show-arrows>
                                    <v-slide-item
                                        v-for="(category, key) in categories" :key="key"
                                        v-slot:default="{ active, toggle }"
                                    >
                                        <v-card
                                            elevation="8"
                                            class="ma-4"
                                            height="160"
                                            width="130"
                                            @click="toggle"
                                        >
                                            <v-img
                                                width="130"
                                                height="100"
                                                class="white--text align-center"
                                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                                :src="category.url"
                                            >
                                                <v-row
                                                    class="full-height"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-scale-transition>
                                                        <v-icon
                                                            v-if="active"
                                                            color="white"
                                                            size="40"
                                                        >
                                                            mdi-close-circle-outline
                                                        </v-icon>
                                                    </v-scale-transition>
                                                </v-row>
                                            </v-img>
                                            <v-card-subtitle
                                                class="black--text"
                                            >
                                                {{ category.title }}
                                            </v-card-subtitle>
                                        </v-card>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-tab-item>
                        </v-tabs>

                        <v-list-item class="py-0">
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-map-marker-radius
                                </v-icon>
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
                    </v-container>
                </v-expand-transition>
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
            </v-card>
            <v-divider class="mt-8"/>
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
                categories: [
                    {
                        url:
                            'https://salt.tikicdn.com/ts/category/90/78/11/b8a67fe010361551e515fdcca7709f69.png',
                        title: 'Thể Thao - Dã Ngoại'
                    },
                    {
                        url:
                            'https://salt.tikicdn.com/ts/category/70/52/b1/31587960ac1eb915a86a5a8202da583a.png',
                        title: 'Điện Tử - Điện Lạnh'
                    },
                    {
                        url:
                            'https://salt.tikicdn.com/ts/category/66/15/4f/6282e8c6655cb87cb226e3b701bb9137.png',
                        title: 'Đồ Chơi - Mẹ & Bé'
                    },
                    {
                        url:
                            'https://salt.tikicdn.com/ts/category/dd/51/92/e6bc22b5ec0d6d965a93f056b7776493.png',
                        title: 'Thời Trang'
                    },
                    {
                        url:
                            'https://salt.tikicdn.com/ts/category/b3/2b/72/8e7b4b703653050ffc79efc8ee017bd0.png',
                        title: 'Điện Gia Dụng'
                    }
                ],
                hotKeywords: ['quạt mini', 'bình giữ nhiệt', 'tai nghe bluetooth', 'gumac', 'nồi chiên không dầu', 'đồng hồ thông minh', 'giày nữ'],
                showSearchOptions: true
            }
        },
        computed: {
            randomColor() {
                let colors = []
                while (colors.length < this.hotKeywords.length) {
                    do {
                        var color = Math.floor(Math.random() * 1000000 + 1)
                    } while (colors.indexOf(color) >= 0)
                    colors.push('#' + ('000000' + color.toString(16)).slice(-6))
                }
                return colors
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
