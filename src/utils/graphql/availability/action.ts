"use server"

import { fetchGraphQLMutation, fetchGraphQLQuery } from "..";
import { GET_EDUCATOR_AVAILABILITY_QUERY, SET_EDUCATOR_AVAILABILITY_MUTATION } from "./query";

export const getEducatorAvalability_Action = async () => {
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATOR_AVAILABILITY_QUERY
  );
  return res;
};

export const setAvailability = async (form: any): Promise<any> => {
  const variables: { input: any } = {
    input: {
      availabilityDays: form.availabilityDays,
      break: form.break,
      lunchBreak: form.lunchBreak,
      overrides: form.overrides,
      slot_duration: form.slot_duration,
      unavailabilityDays: form.unavailabilityDays,
    },
  };

  const res = await fetchGraphQLMutation<any>(
    SET_EDUCATOR_AVAILABILITY_MUTATION,
    variables
  );
  return res ;
};

