<script>
import { results } from "../../helpers.js";

export default {
  name: "Results",
  sortBy: "dob",
  sortDirection: "asc",
  data() {
    return {
      results,
      batch: "Batch 1",
    };
  },
  computed: {
    filterUserByBatch: function () {
      return this.results.filter((user) => !user.batch.indexOf(this.batch));
    },
  },
};
</script>
<template>
  <div class="entire-page">
    <div class="main-frame">
      <label class="heading" for="entries">Results -</label>
      <select class="heading" name="entries" id="batch" v-model="batch">
        <option value="Batch 1">Batch 1</option>
        <option value="Batch 2">Batch 2</option>
        <option value="Batch 3">Batch 3</option>
      </select>
      <p class="description">Comprises of all that applied for {{ batch }}</p>
      <div class="wrapper">
        <table id="assessments">
          <tr class="table-head">
            <th>Name</th>
            <th>Email</th>
            <th class="filter">
              <span>DOB - Age</span>
              <img src="../../assets/ascdesc.svg" alt="" />
            </th>
            <th>Address</th>
            <th>University</th>
            <th class="filter">
              <span>CGPA</span>
              <img src="../../assets/ascdesc.svg" alt="" />
            </th>
            <th>Test Scores</th>
          </tr>
          <tr>
            <td class="py-[10px]"></td>
          </tr>
          <tr
            v-for="user in filterUserByBatch"
            :key="user.id"
            class="table-body light-shadow group transition"
          >
            <td
              class="rounded-lg border-l-8 border-l-transparent group-hover:border-l-primary transition pl-3"
            >
              {{ user.name }}
            </td>
            <td class="td">{{ user.email }}</td>
            <td class="td">{{ user.dob }}</td>
            <td class="td">{{ user.address }}</td>
            <td class="td">{{ user.university }}</td>
            <td class="td">{{ user.cgpa }}</td>
            <td class="td">{{ user.testScore }}</td>
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
  width: 225px;
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
