<template>
  <div class="flex flex-col flex-no-wrap">
    <label for="timepicker" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <div class="relative">
      <select
        class="
          appearance-none block w-full
          text-gray-700 border bg-white
          border-gray-300 rounded py-3 px-4 mb-2
          leading-tight focus:outline-none
          focus:bg-white
        "
        v-on:change="$emit('input', $event.target.value)"
        :value="value"
      >
        <option disabled value="">-- Choose --</option>
        <option :key="index" :value="time" v-for="(time, index) in timeByIntervals">
          {{ time }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default {
  props: ['step', 'label', 'value', 'startTime', 'endTime'],
  computed: {
    timeByIntervals() {
      const startTime = this.startTime ? this.startTime : 7;
      const endTime = this.endTime ? this.endTime : 24;

      const dayStart = moment()
        .startOf('day')
        .hour(startTime);
      const dayEnd = moment()
        .startOf('day')
        .hour(endTime);
      const day = moment.range(dayStart, dayEnd);
      const slots = Array.from(day.by('minutes', { step: this.step }));

      const timeSlots = slots.map((time) => time.format('LT'));

      return timeSlots;
    },
  },
};
</script>
