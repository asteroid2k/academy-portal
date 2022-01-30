<script>
import { ref } from "vue";

export default {
  name: "Assessment History",
  setup() {
    // make batches variable reactive with the ref() function
    const batches = ref([
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
      {
        batch: "Batch 1",
        dateComposed: "12/07/94",
        noOfQuestions: "30",
        timeAllocated: "30 mins",
        status: "Taken",
      },
    ]);

    return {
      batches,
    };
  },
};
</script>
<template>
  <div class="entire-page">
    <div class="main-frame">
      <p class="heading">Assessment History</p>
      <div class="table-frame">
        <div class="wrapper">
          <table id="assessments">
            <tr class="table-head">
              <th>Batch</th>
              <th>Date Composed</th>
              <th>No of Questions</th>
              <th>Time Allocated</th>
              <th>Status</th>
            </tr>
            <tr>
              <td class="py-3"></td>
            </tr>
            <tr
              v-for="batch in batches"
              :key="batch.id"
              class="table-body light-shadow group transition"
            >
              <td
                class="td rounded-lg border-l-8 border-l-transparent group-hover:border-l-primary transition"
              >
                {{ batch.batch }}
              </td>
              <td class="td">{{ batch.dateComposed }}</td>
              <td class="td">{{ batch.noOfQuestions }}</td>
              <td class="td">{{ batch.timeAllocated }}</td>
              <td class="td">{{ batch.status }}</td>
            </tr>
          </table>
        </div>
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
  margin-bottom: 60px;
  color: #2b3c4e;
}

#assessments {
  border-collapse: separate;
  border-spacing: 0;
  position: relative;
  text-align: center;
  width: 100%;
}

#assessments th {
  padding: 13px 0px;
  color: white;
  background: #2b3c4e;
}

.td {
  padding: 20px 0px;
}
/* .table-body:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05),
    7px 0px 0px 0px var(--primary) inset;
  border-radius: 7px;
} */
/* .table-body {
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
  overflow-y: auto;
  height: 400px;
}
.table-head {
  position: sticky;
  top: 0px;
  z-index: 1;
  background: #2b3c4e;
}

@media screen and (max-width: 992px) {
  #assessments {
    width: 200%;
  }
  .table-frame {
    padding: 0px;
    font-size: 14px;
  }
  #assessments th,
  td {
    padding: 15px;
    text-align: center;
  }
  .table-body {
  }
}
</style>
