<script>
import { mapActions, mapGetters } from "vuex";
import UpArrow from "../../assets/up.svg?component";
import DownArrow from "../../assets/down.svg?component";
import { calcAge, notyf } from "../../helpers";
import Polygon from "../../assets/polygon.svg?component";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  async mounted() {
    await this.fetchResults();
  },
  name: "Results",
  props: { instance: Function },
  components: {
    UpArrow,
    DownArrow,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Polygon,
  },
  data() {
    return {
      batch: "",
      sortedR: [],
    };
  },
  computed: {
    ...mapGetters(["results", "batches"]),
    filterUserByBatch: function () {
      return this.sortedR.filter(
        (user) => !user.application.batch_slug.indexOf(this.batch)
      );
    },
  },

  methods: {
    ...mapActions(["storeResults"]),
    calcAge,
    sortByGpa(dir) {
      this.sortedR.sort((a, b) => {
        if (dir === "asc") {
          return parseFloat(a.application.gpa) - parseFloat(b.application.gpa);
        } else {
          return parseFloat(b.application.gpa) - parseFloat(a.application.gpa);
        }
      });
    },
    sortByDob(dir) {
      this.sortedR.sort((a, b) => {
        if (dir === "asc") {
          return new Date(b.application.dob) - new Date(a.application.dob);
        } else {
          return new Date(a.application.dob) - new Date(b.application.dob);
        }
      });
    },
    sortByScore(dir) {
      this.sortedR.sort((a, b) => {
        if (dir === "asc") {
          return new Date(a.score) - new Date(b.score);
        } else {
          return new Date(b.score) - new Date(a.score);
        }
      });
    },
    async fetchResults() {
      try {
        let resp = await this.instance.get("/results");
        if (resp.data) {
          this.storeResults(resp.data.results);
          this.sortedR = resp.data.results;
          this.batch = this.batches[0].slug;
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            notyf.open({ type: "purp", message: "No Result Yet" });
            return;
          }
          const { errors, message } = error.response.data;
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        }
      }
    },
  },
};
</script>
<template>
  <div class="entire-page">
    <div class="main-frame">
      <div class="flex">
        <h1 class="font-light text-[44px]">Results -&nbsp;</h1>
        <div v-show="batches">
          <Listbox v-model="batch">
            <ListboxButton
              ><p class="flex items-center">
                <span class="text-[44px] font-light">{{ batch }}</span>
                <Polygon class="ml-[5px]" />
              </p>
            </ListboxButton>
            <ListboxOptions
              class="absolute w-[150px] z-30 bg-white min-w-[50px] py-4 shadow"
            >
              <ListboxOption
                v-for="{ slug } in batches"
                :key="slug"
                :value="slug"
                class="text-2xl font-light hover:bg-primary/50 py-1 px-4 cursor-pointer"
              >
                {{ slug }}
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
      </div>

      <p class="description">Comprises of all that applied for {{ batch }}</p>
      <div class="wrapper">
        <table class="tableau">
          <thead>
            <tr class="table-head">
              <th>Name</th>
              <th>Email</th>
              <th>
                <div class="flex items-center gap-1">
                  <p>DOB - Age</p>
                  <div class="flex flex-col gap-[1px]">
                    <UpArrow @click="sortByDob('asc')" class="cursor-pointer" />
                    <DownArrow
                      @click="sortByDob('dsc')"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
              </th>
              <th>Address</th>
              <th>University</th>
              <th>
                <div class="flex items-center gap-1">
                  <p>CGPA</p>
                  <div class="flex flex-col gap-[1px]">
                    <UpArrow @click="sortByGpa('asc')" class="cursor-pointer" />
                    <DownArrow
                      @click="sortByGpa('dsc')"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div class="flex items-center gap-1">
                  <p>Test Scores</p>
                  <div class="flex flex-col gap-[1px]">
                    <UpArrow
                      @click="sortByScore('asc')"
                      class="cursor-pointer"
                    />
                    <DownArrow
                      @click="sortByScore('dsc')"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tr>
            <td class="py-[10px]"></td>
          </tr>
          <tr
            v-for="user in filterUserByBatch"
            :key="user.id"
            class="table-body light-shadow group transition"
            style="text-align: center"
          >
            <td class="td group-hover:border-l-primary transition">
              {{ user.application.firstName }} {{ user.application.lastName }}
            </td>
            <td class="td">{{ user.application.email }}</td>
            <td class="td">
              {{ user.application.dob.split("-").reverse().join("/") }} -
              <span>{{ calcAge(user.application.dob) }}</span>
            </td>
            <td class="td">{{ user.application.address }}</td>
            <td class="td">{{ user.application.university }}</td>
            <td class="td">{{ user.application.gpa }}</td>
            <td class="td">{{ user.score }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.main-frame {
  width: 100%;
}

.heading {
  font-style: normal;
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  width: 250px;
  margin-bottom: 5px;
  color: #2b3c4e;
}

select,
select:focus {
  outline: none;
  border: none;
}
.description {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 60px;
  line-height: 19px;
}
table {
  border-spacing: 0;
}
th {
  padding-inline: 0.5rem;
}
/*
#assessments {
  border-collapse: separate;
  border-spacing: 0;
  position: relative;
  width: 100%;
  font-size: 14px;
}

#assessments th {
  padding: 13px 0px;
  text-align: center;
  color: white;
  background: #2b3c4e;
}

.td {
  padding: 20px 0px;
  text-align: center;
} */
/* .table-body:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05),
    7px 0px 0px 0px var(--primary) inset;
  border-radius: 7px;
}
.table-body {
  position: relative;
  top: 28px;
} */
/* .table-frame {
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  padding: 40px 40px 0px;
}
.wrapper {
  overflow: auto;
  height: 400px;
}
.table-head {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.filter {
  display: flex;
  justify-content: space-evenly;
  background: #2b3c4e;
} */
@media screen and (max-width: 992px) {
  #assessments {
    width: 300%;
  }
  .wrapper {
    padding: 10px;
    font-size: 14px;
  }

  #assessments th,
  td {
    padding: 20px 15px;
    text-align: center;
  }
  select {
    padding: 0;
  }
}
</style>
