<script>
import { ref } from "vue";

export default {
  name: "Assessment History",
  data() {
    return {
      batchentry: "Batch 1",
    };
  },
  setup() {
    // make users. variable reactive with the ref() function
    const users = ref([
      {
        name: "Ify Chinke",
        email: "ify@enyata.com",
        dob: "12/09/19 - 22",
        address: "3 Sabo Ave, Yaba, Lagos",
        university: "University of Nigeria",
        cgpa: "5.0",
      },
      {
        name: "Ify Chinke",
        email: "ify@enyata.com",
        dob: "12/09/19 - 22",
        address: "3 Sabo Ave, Yaba, Lagos",
        university: "University of Nigeria",
        cgpa: "5.0",
      },
      {
        name: "Ify Chinke",
        email: "ify@enyata.com",
        dob: "12/09/19 - 22",
        address: "3 Sabo Ave, Yaba, Lagos",
        university: "University of Nigeria",
        cgpa: "5.0",
      },
      {
        name: "Ify Chinke",
        email: "ify@enyata.com",
        dob: "12/09/19 - 22",
        address: "3 Sabo Ave, Yaba, Lagos",
        university: "University of Nigeria",
        cgpa: "5.0",
      },
      {
        name: "Ify Chinke",
        email: "ify@enyata.com",
        dob: "12/09/19 - 22",
        address: "3 Sabo Ave, Yaba, Lagos",
        university: "University of Nigeria",
        cgpa: "5.0",
      },
    ]);

    return {
      users,
    };
  },
};
</script>
<template>
  <div class="entire-page">
    <div class="main-frame">
      <label class="heading" for="entries">Entries -</label>
      <select class="heading" name="entries" id="batch" v-model="batchentry">
        <option value="Batch 1">Batch 1</option>
        <option @click="changeArray()" value="Batch 2">Batch 2</option>
        <option value="Batch 3">Batch 3</option>
      </select>
      <p class="description">
        Comprises of all that applied for {{ batchentry }}
      </p>
      <div class="wrapper">
        <table id="assessments">
          <tr class="table-head">
            <th>Name</th>
            <th>Email</th>
            <th>DOB - Age</th>
            <th>Address</th>
            <th>University</th>
            <th>CGPA</th>
          </tr>
          <tr v-for="user in users" :key="user.id" class="table-body">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.dob }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.university }}</td>
            <td>{{ user.cgpa }}</td>
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
  border-collapse: collapse;
  position: relative;
  width: 100%;
  font-size: 14px;
}

#assessments th {
  padding: 13px 26px;
  text-align: left;
  color: white;
  background: #2b3c4e;
}

td {
  padding: 20px 26px;
}
.table-body:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05),
    7px 0px 0px 0px var(--primary) inset;
  border-radius: 7px;
}
.table-body {
  position: relative;
  top: 28px;
}
.table-frame {
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  padding: 40px 40px 0px;
}
.wrapper {
  overflow-y: auto;
  height: 400px;
}
.table-head {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>