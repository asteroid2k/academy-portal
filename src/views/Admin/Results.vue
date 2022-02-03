<script>
import { mapActions, mapGetters } from "vuex";

export default {
  async mounted() {
    await this.fetchResults();
  },
  name: "Results",
  props: { instance: Function },
  data() {
    return {
      batch: "ACAGH1",
      currentSort: "gpa",
      currentSortDir: "asc",
    };
  },
  methods: {
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
  },
  computed: {
    ...mapGetters(["results"]),
    ...mapGetters(["batches"]),
    filterUserByBatch: function () {
      return this.results
        .filter((user) => !user.application.batch_slug.indexOf(this.batch))
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
    },
  },
  methods: {
    ...mapActions(["storeResults"]),
    async fetchResults() {
      try {
        let resp = await this.instance.get("/results");
        if (resp.data) {
          console.log(resp.data);
          this.storeResults(resp.data.results);
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
                class="
                  text-2xl
                  font-light
                  hover:bg-primary/50
                  py-1
                  px-4
                  cursor-pointer
                "
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
          <thead class="table-head">
            <tr>
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
            <td
              class="
                rounded-lg
                border-l-8 border-l-transparent
                group-hover:border-l-primary
                transition
                pl-3
              "
            >
              {{ user.application.firstName }} {{ user.application.lastName }}
            </td>
            <td class="td">{{ user.application.email }}</td>
            <td class="td">
              {{ user.application.dob.split("-").reverse().join("/") }} -
              <span>{{ user.application.age }}</span>
            </td>
            <td class="td">{{ user.application.address }}</td>
            <td class="td">{{ user.application.university }}</td>
            <td class="td">{{ user.application.gpa }}</td>
            <td class="td">{{ user.score }}</td>
          </tr>
        </table>
        debug: sort={{ currentSort }}, dir={{ currentSortDir }}
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

.table-head {
  position: sticky;
  top: 0px;
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
}
/* .table-body:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05),
    7px 0px 0px 0px var(--primary) inset;
  border-radius: 7px;
}
.table-body {
  position: relative;
  top: 28px;
} */
.table-frame {
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  padding: 40px 40px 0px;
}

.filter {
  display: flex;
  justify-content: space-evenly;
  background: #2b3c4e;
}
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
