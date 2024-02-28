﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using server.Models.TestModel;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(TestContext))]
    [Migration("20240227213332_DbSetUsers")]
    partial class DbSetUsers
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("server.Models.TestModel.Test", b =>
                {
                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.HasKey("name");

                    b.ToTable("Tests");
                });

            modelBuilder.Entity("server.Models.UserModel.User", b =>
                {
                    b.Property<string>("username")
                        .HasColumnType("text");

                    b.Property<int?>("accepted")
                        .HasColumnType("integer");

                    b.Property<int?>("applied")
                        .HasColumnType("integer");

                    b.Property<string>("password")
                        .HasColumnType("text");

                    b.Property<int?>("rejected")
                        .HasColumnType("integer");

                    b.HasKey("username");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
