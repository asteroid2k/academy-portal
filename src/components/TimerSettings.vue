<template>
  <div class="view">
    <div class="header">
      <p class="head">Timer Setting</p>
    </div>
    <div class="set-timer">
      <p class="title mb-3">Set Time</p>
      <div class="flex gap-10">
        <div class="relative">
          <Listbox v-model="min">
            <ListboxButton
              ><p class="flex items-center">
                <span class="text-5xl font-light">{{ min }}</span
                ><span class="text-xs mt-auto">min</span>
                <Polygon class="ml-[5px]" />
              </p>
            </ListboxButton>
            <ListboxOptions class="absolute bg-white min-w-[50px] py-4 shadow">
              <ListboxOption
                v-for="t in ['10', '20', '30', '45', '60']"
                :key="t"
                :value="t"
                class="text-2xl font-light hover:bg-primary/50 py-1 px-4 cursor-pointer"
              >
                {{ t }}
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
        <div class="relative">
          <Listbox v-model="min">
            <ListboxButton
              ><p class="flex items-center">
                <span class="text-5xl font-light">{{ sec }}</span
                ><span class="text-xs mt-auto">sec</span>
                <Polygon class="ml-[5px]" />
              </p>
            </ListboxButton>
            <ListboxOptions class="absolute bg-white min-w-[50px] py-4 shadow">
              <!-- <ListboxOption
              v-for="t in ['10', '20', '30', '45', '60']"
              :key="t"
              :value="t"
              class="text-2xl font-light hover:bg-primary/50 py-1 px-4 cursor-pointer"
            >
              {{ t }}
            </ListboxOption> -->
            </ListboxOptions>
          </Listbox>
        </div>
      </div>
      <div class="button">
        <input
          type="submit"
          id="save-button"
          value="Save"
          @click="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { mapGetters } from "vuex";
import { notyf } from "../helpers";
import Polygon from "../assets/polygon.svg?component";

export default {
  name: "TimerSettings",
  props: { instance: Function },
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Polygon,
  },
  data() {
    return { min: "00", sec: "000" };
  },
  computed: {
    ...mapGetters(["batch"]),
  },
  methods: {
    async handleSubmit() {
      try {
        let response = await this.instance.patch(
          `/assessment/${this.batch._id}`,
          { time: this.min }
        );
        if (response.data) {
          const { data } = response;
          notyf.success(data.message);
        }
      } catch (error) {
        console.log(error);
        // when error has response
        if (error.response) {
          const { data, status, statusText } = error.response;
          if (status === 401 || status === 403) {
            notyf.error(statusText);
            this.$router.push({ name: "AdminSignin" });
            return;
          }
          if (data.message) {
            notyf.error(data.message);
            return;
          }
          //validation errors
          if (data.errors) {
            notyf.error(Object.values(data.errors)[0]);
            return;
          }
          // other errors
          notyf.error("A problem occured");
        } else {
          notyf.error("A problem occured");
        }
      }
    },
  },
};
</script>

<style scoped>
.view {
  margin: 100px 0px 150px;
  width: 80%;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 15px;
  border-bottom: 1px solid #f2f2f2;
}
.head {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;

  color: #4a4a4a;
}
.set-timer {
  margin: 55px 0px 45px;
}
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
#save-button {
  background: #7557d3;
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #ffffff;
  padding: 10px 50px;
}
.button {
  margin: 40px 0px;
}
/* .timer {
  width: 35%;
  display: flex;
  justify-content: space-between;
}
.timer-style {
  display: flex;
  width: fit-content;
  justify-content: space-between;
}
.time {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}
.sec,
.min {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
} */

@media screen and (max-width: 992px) {
  .view {
    width: 100%;
    margin: 50px 0px 75px;
  }
  .timer {
    width: 75%;
  }
}
</style>
