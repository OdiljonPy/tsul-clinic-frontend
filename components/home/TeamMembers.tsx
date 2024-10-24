"use client";

import PrimaryHeadline from "../global/primary-headline";
import React, { useEffect } from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import useTeamStore from "@/store/home/team";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import { motion } from "framer-motion";

const TeamMembers = () => {
  const { t } = getTranslation();
  const { team, loading, fetchTeam, volunteer } = useTeamStore();

  useEffect(() => {
    if (team.length === 0) fetchTeam();
  }, [team]);

  if (loading) return <Loading />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="container pb-40 pt-16 sm:pb-36 sm:pt-20 lg:pb-40 lg:pt-28"
      >
        <PrimaryHeadline text={t("our_team")} />
        <TeamMembersCarousel team={team} isBorder />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="container pb-40 pt-4 sm:pb-40 lg:pb-52 "
      >
        <PrimaryHeadline text={t("our_volunteer")} />
        <TeamMembersCarousel team={volunteer} isBorder />
      </motion.div>
    </>
  );
};

export default TeamMembers;
